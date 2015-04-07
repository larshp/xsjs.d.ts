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
    // get query parameter named id
    var qpId = $.request.parameters.get("id");

    // send response
    $.response.contentType = "plain/test";
    $.response.setBody("body");
    $.response.status = $.net.http.OK;
} else {
    // unsupported method
    $.response.status = $.net.http.INTERNAL_SERVER_ERROR;
}

//create email from JS Object and send
var mail = new $.net.Mail({
    sender: { address: "demo@sap.com" },
    to: [{ address: "demo@sap.com" }],
    subject: "XSJS Email Test",
    parts: [new $.net.Mail.Part({
        type: $.net.Mail.Part.TYPE_TEXT,
        text: "The body of the mail.",
        contentType: "text/plain"
    })]
});
var returnValue = mail.send();
var response = "MessageId = " + returnValue.messageId + ", final reply = " + returnValue.finalReply;


//create email from JS Object and send
var mail = new $.net.Mail({
    sender: { address: "demo@sap.com" },
    to: [{ address: "demo@sap.com" }],
    subject: "XSJS Email Test",
    parts: [new $.net.Mail.Part({
        type: $.net.Mail.Part.TYPE_TEXT,
        text: "Atachement Test",
        contentType: "text/plain"
    })]
});
mail.parts.push(new $.net.Mail.Part({
    type: $.net.Mail.Part.TYPE_ATTACHMENT,
    data: getImage(),
    contentType: "image/jpg",
    fileName: "myPicture.jpg"
}));
var returnValue = mail.send();
var response = "MessageId = " + returnValue.messageId +
    ", final reply = " + returnValue.finalReply;


var zip = new $.util.Zip();
zip["folder1/demo1.txt"] = "This is the new ZIP Processing in XSJS";
zip["demo2.txt"] = "This is also the new ZIP Processing in XSJS";
$.response.status = $.net.http.OK;
$.response.contentType = "application/zip";
$.response.headers.set('Content-Disposition', "attachment; filename = 'ZipExample.zip'");
$.response.setBody(zip.asArrayBuffer());


var zip = new $.util.Zip($.request.body);


statement = conn.prepareStatement("select data from EXAMPLETABLE where id=1");
var rs = statement.executeQuery();
if (rs) {
    while (rs.next()) {
        //Load Zip From ResultSet
        var loadedZip = new $.util.Zip(rs, 1);
    }
}

//create a new $.util.SAXParser object
var parser = new $.util.SAXParser();
//parse XML from String
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


// Handling of multipart requests and responses in xsjs files:
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


var textAccess = $.import("sap.hana.xs.i18n", "text");
var bundle = textAccess.loadBundle("playground.sp9.textAccess", "demo1");
var singleText = bundle.getText("demo");
var replaceText = bundle.getText("demo2", ['1001']);
var oAllTexts = bundle.getTexts();
//$.response.setBody(singleText);
$.response.setBody(replaceText);
//$.response.setBody(JSON.stringify(oAllTexts));


try {
    //create a new $.security.AntiVirus object using the default profile
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

// create client
var client = new $.net.http.Client();

// where and what to send
var dest = $.net.http.readDestination("testApp", "myDestination");
var request = new $.net.http.Request($.net.http.GET, "/"); // new Request(METHOD, PATH)
                                                           // the PATH will be prefixed by destination's pathPrefix, e.g. "/search?" on the request

// send the request and synchronously get the response
client.request(request, dest);
var response2 = client.getResponse();


// get all the cookies and headers from the response
var co = [], he = [];
for(var c in response2.cookies) {
    co.push(response2.cookies[c]);
}

for(var c in response2.headers) {
     he.push(response2.headers[c]);
}

// get the body
if(!response2.body)
    body = "";
else
    body = response2.body.asString();

// send the response as JSON
$.response.contentType = "application/json";
$.response.setBody(JSON.stringify({"status": response2.status, "cookies": co, "headers": he, "body": body}));
