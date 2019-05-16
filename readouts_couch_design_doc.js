{
  "_id": "_design/readouts",
  "filters": {
    "by_status": "function (doc, req) {if (doc.type !== 'readout') {return false;}if (doc.status !== req.query.status) {return false;}return true;}"
  },
  "language": "javascript"
}