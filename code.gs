function doGet(e) {
  return HtmlService.createTemplateFromFile("index").evaluate()
  .setTitle("Formulir Pendaftaran Peserta Didik Baru")
  .addMetaTag('viewport', 'width=device-width, initial-scale=1')
  .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
};

function saveData(obj) {
// https://drive.google.com/drive/folders/1gGYVCevoJt0U8YAv98bCTSDf4iB06dg6?usp=sharing
  var folder = DriveApp.getFolderById("1gGYVCevoJt0U8YAv98bCTSDf4iB06dg6");
  var file;
  var rowData = [
    new Date(),
    obj.input1,   
    obj.input2,
    obj.input3,
    obj.input4,
    obj.input5,
    obj.input6,
    obj.input7,
    obj.input8,
    obj.input9,
    obj.input10,
    obj.input11,
    obj.input12,
    obj.input13,
    obj.input14,
    obj.input15,
    obj.input16,
    obj.input17,
    obj.input18,
    obj.inputkodepos,
    obj.input19,
    obj.input20,
    obj.input21,
    obj.input22,
    obj.input23,
    obj.input24,
    obj.input25,
    obj.input26,
    obj.gelombang,
    obj.inputstatus
  ];

if (obj.uploadFile) {
    Object.keys(obj.uploadFile).sort().forEach(key => {
      Logger.log(key)
      let files = obj.uploadFile[key]
      let datafile = Utilities.base64Decode(files.data)
      let blob = Utilities.newBlob(datafile, files.type, files.name);
      file = folder.createFile(blob).getUrl()
     rowData.push(file);
    })
  }
  console.log(rowData);
  SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Response').appendRow(rowData);
  return true;
};
