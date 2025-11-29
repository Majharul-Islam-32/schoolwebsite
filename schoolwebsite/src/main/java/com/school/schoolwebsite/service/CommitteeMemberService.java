package com.school.schoolwebsite.service;

import com.school.schoolwebsite.entity.CommitteeMember;
import java.util.List;
import java.util.Optional;

public interface CommitteeMemberService {
  List<CommitteeMember> getAllMembers(boolean activeOnly);

  Optional<CommitteeMember> getMemberById(Long id);

  CommitteeMember createMember(CommitteeMember member);

  CommitteeMember updateMember(Long id, CommitteeMember member);

  void deleteMember(Long id);
}
