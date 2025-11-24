package com.school.schoolwebsite.serviceImplement;

import com.school.schoolwebsite.dto.request.LoginRequest;
import com.school.schoolwebsite.dto.response.LoginResponse;
import com.school.schoolwebsite.entity.User;
import com.school.schoolwebsite.repository.UserRepository;
import com.school.schoolwebsite.security.JwtTokenProvider;
import com.school.schoolwebsite.service.AuthService;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

@Service
public class AuthServiceImpl implements AuthService {

  private final AuthenticationManager authenticationManager;
  private final UserRepository userRepository;
  private final JwtTokenProvider jwtTokenProvider;
  private final UserDetailsService userDetailsService;

  public AuthServiceImpl(AuthenticationManager authenticationManager, UserRepository userRepository,
      JwtTokenProvider jwtTokenProvider, UserDetailsService userDetailsService) {
    this.authenticationManager = authenticationManager;
    this.userRepository = userRepository;
    this.jwtTokenProvider = jwtTokenProvider;
    this.userDetailsService = userDetailsService;
  }

  @Override
  public LoginResponse login(LoginRequest request) {
    // Authenticate user
    authenticationManager.authenticate(
        new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword()));

    // Load user details
    UserDetails userDetails = userDetailsService.loadUserByUsername(request.getUsername());

    // Generate token
    String token = jwtTokenProvider.generateToken(userDetails);

    // Get user info
    User user = userRepository.findByUsername(request.getUsername())
        .orElseThrow(() -> new RuntimeException("User not found"));

    return new LoginResponse(
        token,
        user.getUsername(),
        user.getEmail(),
        user.getRole().name());
  }
}
