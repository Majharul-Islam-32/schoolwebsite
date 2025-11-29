package com.school.schoolwebsite.serviceImplement;

import com.school.schoolwebsite.entity.CommitteeMember;
import com.school.schoolwebsite.repository.CommitteeMemberRepository;
import com.school.schoolwebsite.service.CommitteeMemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CommitteeMemberServiceImpl implements CommitteeMemberService {

  @Autowired
  private CommitteeMemberRepository committeeMemberRepository;

  @Override
  public List<CommitteeMember> getAllMembers(boolean activeOnly) {
    if (activeOnly) {
      return committeeMemberRepository.findByIsVisibleTrueOrderBySortOrderAsc();
    }
    return committeeMemberRepository.findAllByOrderBySortOrderAsc();
  }

  @Override
  public Optional<CommitteeMember> getMemberById(Long id) {
    return committeeMemberRepository.findById(id);
  }

  @Override
  public CommitteeMember createMember(CommitteeMember member) {
    return committeeMemberRepository.save(member);
  }

  @Override
  public CommitteeMember updateMember(Long id, CommitteeMember memberDetails) {
    return committeeMemberRepository.findById(id).map(member -> {
      member.setName(memberDetails.getName());
      member.setRole(memberDetails.getRole());
      member.setPhone(memberDetails.getPhone());
      member.setEmail(memberDetails.getEmail());
      member.setImageUrl(memberDetails.getImageUrl());
      member.setSortOrder(memberDetails.getSortOrder());
      member.setVisible(memberDetails.isVisible());
      return committeeMemberRepository.save(member);
    }).orElseThrow(() -> new RuntimeException("Member not found with id " + id));
  }

  @Override
  public void deleteMember(Long id) {
    committeeMemberRepository.deleteById(id);
  }
}
