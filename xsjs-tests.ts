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
