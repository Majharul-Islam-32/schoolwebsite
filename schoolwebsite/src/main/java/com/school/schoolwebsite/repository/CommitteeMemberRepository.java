package com.school.schoolwebsite.repository;

import com.school.schoolwebsite.entity.CommitteeMember;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommitteeMemberRepository extends JpaRepository<CommitteeMember, Long> {
  List<CommitteeMember> findByIsVisibleTrueOrderBySortOrderAsc();

  List<CommitteeMember> findAllByOrderBySortOrderAsc();
}
