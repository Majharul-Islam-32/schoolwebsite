-- Create admin user (password: admin123)
INSERT INTO users (username, email, password, role, created_at)
VALUES ('admin', 'admin@school.com', '$2a$10$N9qo8uLOickgx2ZMRZoMye/IKxKzQzFjKqvVJzpWQzQzJxKQzQzQz', 'ADMIN', NOW());

-- Note: The password hash above is a placeholder. 
-- To generate actual BCrypt hash for 'admin123', run this in your Spring Boot app:
-- new BCryptPasswordEncoder().encode("admin123")

-- Sample Notices
INSERT INTO notices (title, description, category, publish_date, is_urgent, created_by, created_at, updated_at)
VALUES 
('Annual Sports Day 2025', '<p>Registration is now open for all students. Please submit your forms by December 15th.</p>', 'EVENT', '2024-11-24', true, 1, NOW(), NOW()),
('Winter Vacation Notice', '<p>School will remain closed from December 20th to January 5th.</p>', 'HOLIDAY', '2024-11-20', false, 1, NOW(), NOW()),
('Parent-Teacher Meeting', '<p>All parents are requested to attend the meeting on December 10th at 10 AM.</p>', 'MEETING', '2024-11-18', true, 1, NOW(), NOW());

-- Sample Events
INSERT INTO events (title, description, event_date, thumbnail_url, video_url, created_at, updated_at)
VALUES 
('Annual Sports Day 2024', '<p>A day full of excitement and energy as students participated in various sports activities.</p>', '2024-02-15', '/slider2.png', 'https://youtube.com/watch?v=example', NOW(), NOW()),
('Independence Day Celebration', '<p>Grand celebration of Independence Day with cultural programs and flag hoisting.</p>', '2024-03-26', '/slider1.png', NULL, NOW(), NOW()),
('Cultural Program', '<p>Students showcased their talents in music, dance, and drama.</p>', '2024-04-14', '/slider3.png', NULL, NOW(), NOW());
