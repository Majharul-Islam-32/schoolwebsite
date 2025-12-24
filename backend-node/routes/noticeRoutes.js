const express = require('express');
const router = express.Router();
const {
  getNotices,
  createNotice,
  deleteNotice,
  getTickerNotices,
  getTickerSettings,
  updateTickerSettings,
  getNoticeById,
  updateNotice
} = require('../controllers/noticeController');
const { protect } = require('../middleware/authMiddleware');

router.route('/').get(getNotices).post(protect, createNotice);

router.get('/ticker', getTickerNotices);
router.route('/ticker/settings').get(getTickerSettings).put(protect, updateTickerSettings);
router.route('/:id')
  .get(getNoticeById)
  .put(protect, updateNotice)
  .delete(protect, deleteNotice);

module.exports = router;
