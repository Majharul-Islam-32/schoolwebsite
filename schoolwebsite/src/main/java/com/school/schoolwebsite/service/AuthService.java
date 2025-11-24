package com.school.schoolwebsite.service;

import com.school.schoolwebsite.dto.request.LoginRequest;
import com.school.schoolwebsite.dto.response.LoginResponse;

public interface AuthService {
  LoginResponse login(LoginRequest request);
}
