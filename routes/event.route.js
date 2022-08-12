const router = require("express").Router();

const {
  getEvents,
  postEvent,
  putEvent,
  deleteEvent,
  getEvent,
} = require("../controllers/event.controller");

router.route("/events").get(getEvents).post(postEvent);

router.route("/event/:id").get(getEvent).put(putEvent).delete(deleteEvent);

module.exports = router;
