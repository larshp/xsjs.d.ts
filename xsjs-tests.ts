/// <reference path="xsjs.d.ts" />

$.application.language;

$.request;

$.import("bar", "foo");
$.import("moo");

var emailAdress: string = $.session.samlUserInfo.mail;

var test: number = $.db.isolation.READ_COMMITTED;

$.response.contentType = "text/html";
var output = "Hello World!<br><br>";
var conn = $.db.getConnection();

var pstmt = conn.prepareStatement("select * from DUMMY");
var rs = pstmt.executeQuery();
if (!rs.next()) {
    $.response.setBody("Failed to retrieve data");
    $.response.status = $.net.http.INTERNAL_SERVER_ERROR;
} else {
    output = output + "This is the response from my SQL: " + rs.getString(1);
}
rs.close();
pstmt.close();
conn.close();
$.response.setBody(output);


var client = new $.net.http.Client();
var av = new $.security.AntiVirus("upload");
var buffer: string;
av.scan(buffer);
var data: string;
av.scan(data, "myDocument.docx");

var i;
var cumulatedBody = "";
for (i = 0; i < $.request.entities.length; ++i) {
    if ($.request.entities[i].body) {
        cumulatedBody = cumulatedBody + $.request.entities[i].body.asString();
    }
}

if ($.request.method === $.net.http.GET) {
    var qpId = $.request.parameters.get("id");

    $.response.contentType = "plain/test";
    $.response.setBody("body");
    $.response.status = $.net.http.OK;
} else {
    $.response.status = $.net.http.INTERNAL_SERVER_ERROR;
}

var zip = new $.util.Zip();
zip["folder1/demo1.txt"] = "This is the new ZIP Processing in XSJS";
zip["demo2.txt"] = "This is also the new ZIP Processing in XSJS";
$.response.status = $.net.http.OK;
$.response.contentType = "application/zip";
$.response.headers.set('Content-Disposition', "attachment; filename = 'ZipExample.zip'");
$.response.setBody(zip.asArrayBuffer());

var zip = new $.util.Zip($.request.body);

var statement = conn.prepareStatement("select data from EXAMPLETABLE where id=1");
var rs = statement.executeQuery();
if (rs) {
    while (rs.next()) {
        var loadedZip = new $.util.Zip(rs, 1);
    }
}

var parser = new $.util.SAXParser();
var parser = new $.util.SAXParser();
var xml = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n' +
    '<!-- this is a note -->\n' +
    '<note noteName="NoteName">' +
    '<to>To</to>' +
    '<from>From</from>' +
    '<heading>Note heading</heading>' +
    '<body>Note body</body>' +
    '</note>';
var startElementHandlerConcat = "";
var endElementHandlerConcat = "";
var characterDataHandlerConcat = "";
parser.startElementHandler = function(name, atts) {
    startElementHandlerConcat += name;
    if (name === "note") {
        startElementHandlerConcat += " noteName = '" + atts.noteName + "'";
    }
    startElementHandlerConcat += "\n";
};
parser.endElementHandler = function(name) {
    endElementHandlerConcat += name + "\n";
};
parser.characterDataHandler = function(s) {
    characterDataHandlerConcat += s;
};
parser.parse(xml);
var body = 'Start: ' + startElementHandlerConcat + '</br>' +
    'End: ' + endElementHandlerConcat + '</br>' +
    'Charcter: ' + characterDataHandlerConcat + '</br>';
$.response.status = $.net.http.OK;
$.response.contentType = "text/html";
$.response.setBody(body);

var i;
var n = $.request.entities.length;
var client = new $.net.http.Client();
for (i = 0; i < n; ++i) {
    var childRequest = $.request.entities[i].body.asWebRequest();
    client.request(childRequest, childRequest.headers.get("Host") + childRequest.path);
    var childResponse = client.getResponse();
    var responseEntity = $.response.entities.create();
    responseEntity.setBody(childResponse);
}

$.response.contentType = "text/html";
var output = "Hello, World! <br><br>";
var conn = $.db.getConnection();
var pstmt = conn.prepareStatement('select * from DUMMY');
var rs = pstmt.executeQuery();
if (!rs.next()) {
    $.response.setBody("Failed to retieve data");
    $.response.status = $.net.http.INTERNAL_SERVER_ERROR;
}
else {
    output += "This is the response from my SQL: " +
    rs.getString(1);
    $.response.setBody(output);
    $.response.followUp({
        uri: "playground.sp9.followUp:other.xsjs",
        functionName: "doSomething",
        parameter: {
            a: "b"
        }
    });
}

try {
    var av = new $.security.AntiVirus();
    av.scan($.request.body);
} catch (e) {
    $.response.setBody(e.toString());
}

function store() {
    var config = {
        name: "foo",
        value: "bar"
    };
    var aStore = new $.security.Store("localStore.xssecurestore");
    aStore.store(config);
}
function read() {
    var config = {
        name: "foo"
    };
    try {
        var store = new $.security.Store("localStore.xssecurestore");
        var value = store.read(config);
    }
    catch (ex) {
        //do some error handling
    }
}

var aCmd = $.request.parameters.get('cmd');
switch (aCmd) {
    case "store":
        store();
        break;
    case "read":
        read();
        break;
    default:
        $.response.status = $.net.http.INTERNAL_SERVER_ERROR;
        $.response.setBody('Invalid Command');
}

var client = new $.net.http.Client();
var dest = $.net.http.readDestination("testApp", "myDestination");
var response2 = client.getResponse();

var co = [], he = [];
for(var c in response2.cookies) {
    co.push(response2.cookies[c]);
}

for(var c in response2.headers) {
     he.push(response2.headers[c]);
}

if(!response2.body)
    body = "";
else
    body = response2.body.asString();

$.response.contentType = "application/json";
$.response.setBody(JSON.stringify({"status": response2.status, "cookies": co, "headers": he, "body": body}));


var mail = new $.net.Mail();
mail.subject = "About what the email is."
mail.subjectEncoding = "UTF-8";
mail.sender = {address: "from@sap.com"};
mail.cc = [{name: "Cc1", address: "cc1@recepient.com"}, {address: "cc2@recepient.com"}];

var response = "";

try {
    var returnValue = mail.send();
} catch(error) {
    response = "Error occurred:" + error.message;
}
response = "MessageId = " + returnValue.messageId + ", final reply = " + returnValue.finalReply;

$.response.status = $.net.http.OK;
$.response.contentType = "text/html";
$.response.setBody(response);

var foosdf = $.net.Mail.Part.TYPE_TEXT;
