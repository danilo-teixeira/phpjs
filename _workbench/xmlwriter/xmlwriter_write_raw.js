function xmlwriter_write_raw (xmlwriter, content) {
	// http://kevin.vanzonneveld.net
	// +   original by: Brett Zamir (http://brettz9.blogspot.com)
	// *     example 1: var xmlwriter = xmlwriter_open_memory();
	// *     example 1: xmlwriter_write_raw(xmlwriter, content);
	// *     returns 1: true

    return xmlwriter.writeRaw(content);
}