// Type definitions for SAP HANA XS Engine
// Project: http://help.sap.com/hana/SAP_HANA_XS_JavaScript_API_Reference_en/
// Definitions by: Lars Hvam <https://github.com/larshp>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module xsjs {

    interface Application {
        language: string;
    }

    interface Session {
        language: string;
        samlUserInfo: any;

        assertAppPrivilege(privilegeName: string);
        assertSystemPrivilege(privilegeName);
        getInvocationCount(): number;
        getSecurityToken(): string;
        getTimeout(): number;
        getUsername(): string;
        hasAppPrivilege(privilegeName: string): boolean;
        hasSystemPrivilege(privilegeName: string): boolean;
    }

    interface xsjs {

        application: Application;
        request: xsjs.web.WebRequest;
        response: xsjs.web.WebResponse;
        session: Session;

        db: xsjs.db.xsjs;
        net: xsjs.net.xsjs;
        hdb: xsjs.hdb.xsjs;
        jobs: xsjs.jobs.xsjs;
        security: xsjs.security.xsjs;
        trace: xsjs.trace.xsjs;
        util: xsjs.util.xsjs;
        web: xsjs.web.xsjs;

        import(package: string, library: string): Object;
        import(path: string): Object;

    }

}

declare module xsjs.db {

    interface CallableStatement {
        close();
        execute(): boolean;
        getBigInt(index: number): number; // todo
        getBlob(index: number): ArrayBuffer;
        getBString(index: number): ArrayBuffer;
        getClob(index: number): string;
        getDate(index: number): Date;
        getDecimal(index: number): number;
        getDouble(index: number): number;
        getFloat(columnIndex: number): number;
        getInteger(index: number): number;
        getMoreResults(): boolean;
        getNClob(index: number): string;
        getNString(index: number): string;
        getParameterMetaData(): ParameterMetaData;
        getReal(columnIndex: number): number;
        getResultSet(): ResultSet;
        getSeconddate(index: number): Date;
        getString(index: number): string;
        getText(index: number): string;
        getTime(index: number): Date;
        getTimestamp(index: number): Date;
        isClosed(): boolean;
        setBigInt(index: number, value: number);
        setBlob(index: number, value: ArrayBuffer);
        setBString(index: number, value: ArrayBuffer);
        setClob(index: number, value: string);
        setDate(index: number, value: Date, format?: string);
        setDate(index: number, value: string, format?: string);
        setDecimal(index: number, value: number);
        setDouble(index: number, value: number);
        setFloat(index: number, value: number);
        setInteger(index: number, value: number);
        setNClob(index: number, value: string);
        setNString(columnIndex: number, value: string);
        setNull(index: number);
        setReal(index: number, value: number);
        setSmallInt(index: number, value: number);
        setString(columnIndex: number, value: string);
        setText(columnIndex: number, value: string);
        setTime(index: number, value: Date, format?: string);
        setTime(index: number, value: string, format?: string);
        setTimestamp(index: number, value: Date, format?: string);
        setTimestamp(index: number, value: string, format?: string);
        setTinyInt(index: number, value: number);
    }

    interface Connection {
        close();
        commit();
        isClosed(): boolean;
        prepareCall(statement: string): CallableStatement;
        prepareStatement(statement: string): PreparedStatement;
        setAutoCommit(enable: number);
    }

    interface ParameterMetaData {
        // todo
    }

    // todo, superclass? a lot of the methods are common?

    interface PreparedStatement {
        addBatch();
        close();
        execute(): boolean;
        // todo      executeBatch(): array;
        executeQuery(): ResultSet;
        executeUpdate(): number;
        getMetaData(): ResultSetMetaData;
        getMoreResults(): boolean;
        getParameterMetaData(): ParameterMetaData;
        getResultSet(): ResultSet;
        isClosed(): boolean;
        setBatchSize(size: number);
        setBigInt(columnIndex: number, value: number);
        setBlob(columnIndex: number, value: ArrayBuffer);
        setBString(columnIndex: number, value: ArrayBuffer);
        setClob(columnIndex: number, value: string);
        setDate(columnIndex: number, value: Date, format?: string);
        setDate(columnIndex: number, value: string, format?: string);
        setDecimal(index: number, value: number);
        setDouble(columnIndex: number, value: number);
        setFloat(columnIndex: number, value: number);
        setInteger(columnIndex: number, value: number);
        setNClob(columnIndex: number, value: string);
        setNString(columnIndex: number, value: string);
        setNull(columnIndex: number);
        setReal(columnIndex: number, value: number);
        setSmallInt(columnIndex: number, value: number);
        setString(columnIndex: number, value: string);
        setText(columnIndex: number, value: string);
        setTime(columnIndex: number, value: Date, format?: string);
        setTime(columnIndex: number, value: string, format?: string);
        setTimestamp(index: number, value: Date, format?: string);
        setTimestamp(index: number, value: string, format?: string);
        setTinyInt(columnIndex: number, value: number);
    }

    interface ResultSet {
        close()
        getBigInt(columnIndex: number): number; // todo
        getBlob(columnIndex: number): ArrayBuffer;
        getBString(columnIndex: number): ArrayBuffer;
        getClob(columnIndex: number): string;
        getDate(columnIndex: number): Date;
        getDecimal(columnIndex: number): number;
        getDouble(columnIndex: number): number;
        getFloat(columnIndex: number): number;
        getInteger(columnIndex: number): number;
        getMetaData(): ResultSetMetaData;
        getNClob(columnIndex: number): string;
        getNString(columnIndex: number): string;
        getReal(columnIndex: number): number;
        getSeconddate(columnIndex: number): Date;
        getString(columnIndex: number): string;
        getText(columnIndex: number): string;
        getTime(columnIndex: number): Date;
        getTimestamp(columnIndex: number): Date;
        isClosed(): boolean;
        next(): boolean;
    }

    interface ResultSetMetaData {
        // todo
    }

    interface SQLException {
        // todo
    }

    interface isolation {
        READ_COMMITTED: number;
        REPEATABLE_READ: number;
        SERIALIZABLE: number;
    }

    interface types {
        TINYINT: number;
        SMALLINT: number;
        INT: number;
        INTEGER: number;
        BIGINT: number;
        DECIMAL: number;
        REAL: number;
        DOUBLE: number;
        CHAR: number;
        VARCHAR: number;
        NCHAR: number;
        NVARCHAR: number;
        BINARY: number;
        VARBINARY: number;
        DATE: number;
        TIME: number;
        TIMESTAMP: number;
        CLOB: number;
        NCLOB: number;
        BLOB: number;
        TABLE: number;
        SMALLDECIMAL: number;
        TEXT: number;
        SHORTTEXT: number;
        ALPHANUM: number;
        SECONDDATE: number;
    }

    interface xsjs {
        isolation: isolation;
        types: types;

        getConnection(sqlcc?: string, isolationLevel?: isolation): xsjs.db.Connection;
        getConnection(configurationObject?): xsjs.db.Connection;
    }
}

declare module xsjs.hdb {
    // todo
    interface xsjs {
        // todo
    }
}

declare module xsjs.jobs {
    // todo
    interface xsjs {
        // todo
    }
}

declare module xsjs.net.http {
    interface Client {
        getResponse(): xsjs.web.WebResponse;
        request(request: xsjs.net.http.Request, destination: xsjs.net.http.Destination);
        request(request: xsjs.net.http.Request, url: string, proxy?: string);
        request(WebMethod: xsjs.net.http, url: string, proxy?: string);
        setTimeout(timeout: number);
    }

    interface Destination {
        // todo
    }

    interface Request extends xsjs.web.WebRequest {

    }
}

declare module xsjs.net {

    interface http {
        Client: {
            new (): xsjs.net.http.Client;
        };

        Request: {
            new (): xsjs.net.http.Request;
        };

        readDestination(package: string, objectName: string): xsjs.net.http.Destination;

        OPTIONS: number;
        GET: number;
        HEAD: number;
        POST: number;
        PUT: number;
        DEL: number;
        TRACE: number;
        CONNECT: number;
        PATCH: number;
        CONTINUE: number;
        SWITCH_PROTOCOL: number;
        OK: number;
        CREATED: number;
        ACCEPTED: number;
        NON_AUTHORITATIVE: number;
        NO_CONTENT: number;
        RESET_CONTENT: number;
        PARTIAL_CONTENT: number;
        MULTIPLE_CHOICES: number;
        MOVED_PERMANENTLY: number;
        FOUND: number;
        SEE_OTHER: number;
        NOT_MODIFIED: number;
        USE_PROXY: number;
        TEMPORARY_REDIRECT: number;
        BAD_REQUEST: number;
        UNAUTHORIZED: number;
        PAYMENT_REQUIRED: number;
        FORBIDDEN: number;
        NOT_FOUND: number;
        METHOD_NOT_ALLOWED: number;
        NOT_ACCEPTABLE: number;
        PROXY_AUTH_REQUIRED: number;
        REQUEST_TIMEOUT: number;
        CONFLICT: number;
        GONE: number;
        LENGTH_REQUIRED: number;
        PRECONDITION_FAILED: number;
        REQUEST_ENTITY_TOO_LARGE: number;
        REQUEST_URI_TOO_LONG: number;
        UNSUPPORTED_MEDIA_TYPE: number;
        REQUESTED_RANGE_NOT_SATISFIABLE: number;
        EXPECTATION_FAILED: number;
        INTERNAL_SERVER_ERROR: number;
        NOT_YET_IMPLEMENTED: number;
        BAD_GATEWAY: number;
        SERVICE_UNAVAILABLE: number;
        GATEWAY_TIMEOUT: number;
        HTTP_VERSION_NOT_SUPPORTED: number;
    }

    // todo
    interface xsjs {
        status: number;
        http: http;
        // todo
    }
}

declare module xsjs.security {

    interface AntiVirus {
        constructor(profile?: string);

        scan(data: any, objectName?: string);
    }

    interface xsjs {
        AntiVirus: {
            new (profile?: string): AntiVirus;
        };
    }
}

declare module xsjs.trace {
    // todo
    interface xsjs {
        // todo
    }
}

declare module xsjs.util {

    interface SAXParser {
        attlistDeclHandler: (elname: string, attname: string, att_type: string, dflt: string, isrequired: number) => void;
        characterDataHandler: (s: string) => void;
        commentHandler: (data: string) => void;
        currentByteIndex: number;
        currentColumnNumber: number;
        currentLineNumber: number;
        endCDataSectionHandler: () => void;
        endDoctypeDeclHandler: () => void;
        endElementHandler: (name: string) => void;
        endNameSpaceDeclHandler: (prefix: string) => void;
        entityDeclHandler: (entityName: string, is_parameter_entity: number, value: string, systemId: string, publicId: string, notationName: string) => void;
        externalEntityRefHandler: (context: string, systemId: string, publicId: string) => void;
        notationDeclHandler: (notationName: string, systemId: string, publicId: string) => void;
        processingInstructionHandler:(target: string, data: string) => void;
        startCDataSectionHandler: () => void;
        startDoctypeDeclHandler: (doctypeName: string, sysid: string, pubid: string, has_internal_subset: number) => void;
        startElementHandler: (name: string, atts: any) => void;
        startNameSpaceDeclHandler: (prefix: string, uri: string) => void;
        xmlDeclHandler: (version: string, encoding: string, standalone: number) => void;

        parse(xml: string);
        parse(xml: ArrayBuffer, encoding?: string);
        parse(xml: xsjs.web.Body, encoding?: string);
        reset();
        resume();
        stop(isResumable: boolean);

    }

    interface Zip {

    }

    interface xsjs {
        stringify(arrayBuffer: ArrayBuffer): string;
    }
}

declare module xsjs.web {
    interface Body {
        asArrayBuffer(): ArrayBuffer;
        asString(): string;
        asWebRequest(): xsjs.web.WebRequest;
    }

    interface EntityList {
        length: number;

        create(): WebEntityResponse;
    }

    interface TupelList {
        length: number;

        get(name: string): string;
        remove(name: string);
        set(name: string, value: string): boolean;
    }

    interface WebEntityRequest {
        body: Body;
        contentType: string;
        entities: EntityList;
        headers: TupelList;
        parameters: TupelList;

        setBody(body: any, index?: number);
    }

    interface WebEntityResponse {
        body: Body;
        contentType: string;
        entities: EntityList;
        headers: TupelList;

        setBody(body: any, index?: number);
    }

    interface WebRequest extends WebEntityRequest {
        cookies: TupelList;
        language: string;
        method: number;
        path: string;
        queryPath: string;
    }

    interface WebResponse extends WebEntityResponse {
        cacheControl: string;
        cookies: TupelList;
        status: number; // todo?

        followUp(object: any);
    }

    interface xsjs {
        // todo
    }
}

declare var $: xsjs.xsjs;
