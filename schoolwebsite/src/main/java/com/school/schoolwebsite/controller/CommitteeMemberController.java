package com.school.schoolwebsite.controller;

import com.school.schoolwebsite.entity.CommitteeMember;
import com.school.schoolwebsite.service.CommitteeMemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/committee-members")
@CrossOrigin(origins = "http://localhost:5173")
public class CommitteeMemberController {

  @Autowired
  private CommitteeMemberService committeeMemberService;

  @GetMapping
  public List<CommitteeMember> getAllMembers(
      @RequestParam(required = false, defaultValue = "false") boolean activeOnly) {
    return committeeMemberService.getAllMembers(activeOnly);
  }

  @GetMapping("/{id}")
  public ResponseEntity<CommitteeMember> getMemberById(@PathVariable Long id) {
    return committeeMemberService.getMemberById(id)
        .map(ResponseEntity::ok)
        .orElse(ResponseEntity.notFound().build());
  }

  @PostMapping
  public CommitteeMember createMember(@RequestBody CommitteeMember member) {
    return committeeMemberService.createMember(member);
  }

  @PutMapping("/{id}")
  public ResponseEntity<CommitteeMember> updateMember(@PathVariable Long id, @RequestBody CommitteeMember member) {
    try {
      return ResponseEntity.ok(committeeMemberService.updateMember(id, member));
    } catch (RuntimeException e) {
      return ResponseEntity.notFound().build();
    }
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<Void> deleteMember(@PathVariable Long id) {
    committeeMemberService.deleteMember(id);
    return ResponseEntity.ok().build();
  }
}
