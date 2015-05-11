var router = require('express').Router();
var whisky = require('../lib/controllers/whisky');
var regions = require('../lib/controllers/regions');

router.route('/whisky')
  .get(whisky.all);

router.route('/whisky/like/:whisky')
  .get(whisky.like);

router.route('/regions')
  .get(regions.all);

router.route('/whisky/in/:region')
  .get(whisky.inRegion);

module.exports = router;