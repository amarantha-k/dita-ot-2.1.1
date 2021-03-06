
      var tree;
      
      function treeInit() {
      tree = new YAHOO.widget.TreeView("treeDiv1");
      var root = tree.getRoot();
    
  
  
  var objd4e231 = { label: "DITA Open Toolkit 2.1", href:"DITA-OTProjectHome.html", target:"contentwin" };
    var d4e231 = new YAHOO.widget.TextNode(objd4e231, root, false);
  var objd4e245 = { label: "Release Notes", href:"release-notes/rel2.1.html", target:"contentwin" };
    var d4e245 = new YAHOO.widget.TextNode(objd4e245, root, false);
  var objd4e259 = { label: "Getting Started", href:"getting-started/index.html", target:"contentwin" };
    var d4e259 = new YAHOO.widget.TextNode(objd4e259, root, false);var objd4e273 = { label: "Installing the toolkit", href:"user-guide/installing-client.html", target:"contentwin" };
    var d4e273 = new YAHOO.widget.TextNode(objd4e273, d4e259, false);var objd4e283 = { label: "Building output using the dita command", href:"getting-started/using-dita-command.html", target:"contentwin" };
    var d4e283 = new YAHOO.widget.TextNode(objd4e283, d4e259, false);
  var objd4e300 = { label: "User Guide", href:"user-guide/index.html", target:"contentwin" };
    var d4e300 = new YAHOO.widget.TextNode(objd4e300, root, false);var objd4e314 = { label: "DITA Open Toolkit Overview", href:"user-guide/overview-of-dita-ot.html", target:"contentwin" };
    var d4e314 = new YAHOO.widget.TextNode(objd4e314, d4e300, false);var objd4e324 = { label: "DITA specification support", href:"user-guide/DITA_spec-support.html", target:"contentwin" };
    var d4e324 = new YAHOO.widget.TextNode(objd4e324, d4e314, false);var objd4e337 = { label: "DITA 1.2 support", href:"user-guide/DITA_v1-2-support.html", target:"contentwin" };
    var d4e337 = new YAHOO.widget.TextNode(objd4e337, d4e324, false);var objd4e350 = { label: "DITA 1.3 support", href:"user-guide/DITA_v1-3-support.html", target:"contentwin" };
    var d4e350 = new YAHOO.widget.TextNode(objd4e350, d4e324, false);var objd4e363 = { label: "Tested platforms and tools", href:"user-guide/tested-tools.html", target:"contentwin" };
    var d4e363 = new YAHOO.widget.TextNode(objd4e363, d4e314, false);var objd4e373 = { label: "Installing the DITA-OT", href:"user-guide/installing.html", target:"contentwin" };
    var d4e373 = new YAHOO.widget.TextNode(objd4e373, d4e300, false);var objd4e383 = { label: "Prerequisite software", href:"user-guide/prerequisite-software.html", target:"contentwin" };
    var d4e383 = new YAHOO.widget.TextNode(objd4e383, d4e373, false);var objd4e393 = { label: "Installing the toolkit", href:"user-guide/installing-client.html", target:"contentwin" };
    var d4e393 = new YAHOO.widget.TextNode(objd4e393, d4e373, false);var objd4e403 = { label: "Publishing DITA content", href:"user-guide/transforming-dita-content.html", target:"contentwin" };
    var d4e403 = new YAHOO.widget.TextNode(objd4e403, d4e300, false);var objd4e413 = { label: "DITA-OT transformations", href:"user-guide/AvailableTransforms.html", target:"contentwin" };
    var d4e413 = new YAHOO.widget.TextNode(objd4e413, d4e403, false);var objd4e423 = { label: "DITA to Docbook", href:"user-guide/dita2docbook.html", target:"contentwin" };
    var d4e423 = new YAHOO.widget.TextNode(objd4e423, d4e413, false);var objd4e436 = { label: "DITA to Eclipse Content", href:"user-guide/dita2eclipsecontent.html", target:"contentwin" };
    var d4e436 = new YAHOO.widget.TextNode(objd4e436, d4e413, false);var objd4e449 = { label: "DITA to Eclipse help", href:"user-guide/dita2eclipsehelp.html", target:"contentwin" };
    var d4e449 = new YAHOO.widget.TextNode(objd4e449, d4e413, false);var objd4e462 = { label: "DITA to HTML5", href:"user-guide/dita2html5.html", target:"contentwin" };
    var d4e462 = new YAHOO.widget.TextNode(objd4e462, d4e413, false);var objd4e475 = { label: "DITA to HTML Help (CHM)", href:"user-guide/dita2htmlhelp.html", target:"contentwin" };
    var d4e475 = new YAHOO.widget.TextNode(objd4e475, d4e413, false);var objd4e488 = { label: "DITA to ODT", href:"user-guide/dita2odt.html", target:"contentwin" };
    var d4e488 = new YAHOO.widget.TextNode(objd4e488, d4e413, false);var objd4e501 = { label: "DITA to PDF (PDF2)", href:"user-guide/dita2pdf.html", target:"contentwin" };
    var d4e501 = new YAHOO.widget.TextNode(objd4e501, d4e413, false);var objd4e517 = { label: "Creating Change Bars", href:"user-guide/pdf2-creating-change-bars.html", target:"contentwin" };
    var d4e517 = new YAHOO.widget.TextNode(objd4e517, d4e501, false);var objd4e527 = { label: "DITA to RTF", href:"user-guide/dita2wordrtf.html", target:"contentwin" };
    var d4e527 = new YAHOO.widget.TextNode(objd4e527, d4e413, false);var objd4e540 = { label: "DITA to TocJS", href:"user-guide/dita2tocjs.html", target:"contentwin" };
    var d4e540 = new YAHOO.widget.TextNode(objd4e540, d4e413, false);var objd4e553 = { label: "DITA to troff", href:"user-guide/dita2troff.html", target:"contentwin" };
    var d4e553 = new YAHOO.widget.TextNode(objd4e553, d4e413, false);var objd4e567 = { label: "DITA to XHTML", href:"user-guide/dita2xhtml.html", target:"contentwin" };
    var d4e567 = new YAHOO.widget.TextNode(objd4e567, d4e413, false);var objd4e580 = { label: "Publishing content with the dita command", href:"user-guide/dita-command.html", target:"contentwin" };
    var d4e580 = new YAHOO.widget.TextNode(objd4e580, d4e403, false);var objd4e596 = { label: "Building output using the dita command", href:"user-guide/using-dita-command.html", target:"contentwin" };
    var d4e596 = new YAHOO.widget.TextNode(objd4e596, d4e580, false);var objd4e612 = { label: "Publishing DITA content from Ant", href:"user-guide/publishing-with-ant.html", target:"contentwin" };
    var d4e612 = new YAHOO.widget.TextNode(objd4e612, d4e403, false);var objd4e622 = { label: "Ant", href:"user-guide/ant.html", target:"contentwin" };
    var d4e622 = new YAHOO.widget.TextNode(objd4e622, d4e612, false);var objd4e632 = { label: "Building output using Ant", href:"user-guide/building-with-ant.html", target:"contentwin" };
    var d4e632 = new YAHOO.widget.TextNode(objd4e632, d4e612, false);var objd4e645 = { label: "Creating an Ant build script", href:"user-guide/creating-an-ant-build-script.html", target:"contentwin" };
    var d4e645 = new YAHOO.widget.TextNode(objd4e645, d4e612, false);var objd4e655 = { label: "Extending the DITA-OT", href:"user-guide/extending-the-dita-ot.html", target:"contentwin" };
    var d4e655 = new YAHOO.widget.TextNode(objd4e655, d4e300, false);var objd4e665 = { label: "Installing plug-ins", href:"user-guide/plugins-installing.html", target:"contentwin" };
    var d4e665 = new YAHOO.widget.TextNode(objd4e665, d4e655, false);var objd4e675 = { label: "Removing plug-ins", href:"user-guide/plugins-removing.html", target:"contentwin" };
    var d4e675 = new YAHOO.widget.TextNode(objd4e675, d4e655, false);var objd4e685 = { label: "Globalizing DITA content", href:"user-guide/DITA-globalization.html", target:"contentwin" };
    var d4e685 = new YAHOO.widget.TextNode(objd4e685, d4e300, false);var objd4e695 = { label: "Globalization support offered by the DITA-OT", href:"user-guide/globalization-supported-in-dita-ot.html", target:"contentwin" };
    var d4e695 = new YAHOO.widget.TextNode(objd4e695, d4e685, false);var objd4e705 = { label: "Supported languages: HTML-based transformations", href:"user-guide/DITA-globalization-xhtml.html", target:"contentwin" };
    var d4e705 = new YAHOO.widget.TextNode(objd4e705, d4e685, false);var objd4e715 = { label: "Supported languages: PDF transformations", href:"user-guide/DITA-globalization-pdf.html", target:"contentwin" };
    var d4e715 = new YAHOO.widget.TextNode(objd4e715, d4e685, false);var objd4e725 = { label: "Troubleshooting", href:"user-guide/troubleshooting-overview.html", target:"contentwin" };
    var d4e725 = new YAHOO.widget.TextNode(objd4e725, d4e300, false);var objd4e735 = { label: "DITA-OT error messages", href:"user-guide/DITA-messages.html", target:"contentwin" };
    var d4e735 = new YAHOO.widget.TextNode(objd4e735, d4e725, false);var objd4e755 = { label: "Other error messages", href:"user-guide/other-errors.html", target:"contentwin" };
    var d4e755 = new YAHOO.widget.TextNode(objd4e755, d4e725, false);var objd4e765 = { label: "Log files", href:"user-guide/log-files.html", target:"contentwin" };
    var d4e765 = new YAHOO.widget.TextNode(objd4e765, d4e725, false);var objd4e775 = { label: "Accessing help for the dita command", href:"user-guide/dita-command-help.html", target:"contentwin" };
    var d4e775 = new YAHOO.widget.TextNode(objd4e775, d4e725, false);var objd4e791 = { label: "Determining the version of the DITA Open Toolkit", href:"user-guide/determining-version-of-ditaot.html", target:"contentwin" };
    var d4e791 = new YAHOO.widget.TextNode(objd4e791, d4e725, false);var objd4e801 = { label: "Enabling debug mode", href:"user-guide/enabling-debug-mode.html", target:"contentwin" };
    var d4e801 = new YAHOO.widget.TextNode(objd4e801, d4e725, false);var objd4e811 = { label: "Increasing Java memory allocation", href:"user-guide/increasing-the-jvm.html", target:"contentwin" };
    var d4e811 = new YAHOO.widget.TextNode(objd4e811, d4e725, false);var objd4e821 = { label: "Reducing processing time", href:"user-guide/reducing-processing-time.html", target:"contentwin" };
    var d4e821 = new YAHOO.widget.TextNode(objd4e821, d4e725, false);
  var objd4e832 = { label: "Parameter Reference", href:"parameters/index.html", target:"contentwin" };
    var d4e832 = new YAHOO.widget.TextNode(objd4e832, root, false);var objd4e848 = { label: "Ant parameters", href:"parameters/ant-parameters_intro.html", target:"contentwin" };
    var d4e848 = new YAHOO.widget.TextNode(objd4e848, d4e832, false);var objd4e858 = { label: "Common", href:"parameters/ant-parameters-base-transformation.html", target:"contentwin" };
    var d4e858 = new YAHOO.widget.TextNode(objd4e858, d4e848, false);var objd4e868 = { label: "Common HTML-based transformations", href:"parameters/ant-parameters-base-html-transformation.html", target:"contentwin" };
    var d4e868 = new YAHOO.widget.TextNode(objd4e868, d4e848, false);var objd4e893 = { label: "Eclipse content", href:"parameters/ant-parameters-eclipsecontent-transformation.html", target:"contentwin" };
    var d4e893 = new YAHOO.widget.TextNode(objd4e893, d4e848, false);var objd4e903 = { label: "Eclipse Help", href:"parameters/ant-parameters-eclipsehelp-transformation.html", target:"contentwin" };
    var d4e903 = new YAHOO.widget.TextNode(objd4e903, d4e848, false);var objd4e913 = { label: "HTMLHelp", href:"parameters/ant-parameters-htmlhelp-transformation.html", target:"contentwin" };
    var d4e913 = new YAHOO.widget.TextNode(objd4e913, d4e848, false);var objd4e923 = { label: "JavaHelp", href:"parameters/ant-parameters-javahelp-transformation.html", target:"contentwin" };
    var d4e923 = new YAHOO.widget.TextNode(objd4e923, d4e848, false);var objd4e933 = { label: "Open Document Format", href:"parameters/ant-parameters-odt-transformation.html", target:"contentwin" };
    var d4e933 = new YAHOO.widget.TextNode(objd4e933, d4e848, false);var objd4e943 = { label: "Other", href:"parameters/ant-parameters-other.html", target:"contentwin" };
    var d4e943 = new YAHOO.widget.TextNode(objd4e943, d4e848, false);var objd4e953 = { label: "PDF", href:"parameters/ant-parameters-pdf-transformation.html", target:"contentwin" };
    var d4e953 = new YAHOO.widget.TextNode(objd4e953, d4e848, false);var objd4e963 = { label: "HTML", href:"parameters/ant-parameters-html5-transformation.html", target:"contentwin" };
    var d4e963 = new YAHOO.widget.TextNode(objd4e963, d4e848, false);var objd4e980 = { label: "Configuration properties", href:"parameters/configuration-properties.html", target:"contentwin" };
    var d4e980 = new YAHOO.widget.TextNode(objd4e980, d4e832, false);var objd4e993 = { label: "plugin.properties file", href:"parameters/lib-plugin-properties.html", target:"contentwin" };
    var d4e993 = new YAHOO.widget.TextNode(objd4e993, d4e980, false);var objd4e1011 = { label: "configuration.properties file", href:"parameters/lib-configuration-properties.html", target:"contentwin" };
    var d4e1011 = new YAHOO.widget.TextNode(objd4e1011, d4e980, false);var objd4e1026 = { label: "DITA command arguments", href:"parameters/dita-command-arguments.html", target:"contentwin" };
    var d4e1026 = new YAHOO.widget.TextNode(objd4e1026, d4e832, false);var objd4e1039 = { label: "Internal Ant properties", href:"parameters/internal-ant-properties.html", target:"contentwin" };
    var d4e1039 = new YAHOO.widget.TextNode(objd4e1039, d4e832, false);
  var objd4e1050 = { label: "Developer Reference", href:"dev_ref/index.html", target:"contentwin" };
    var d4e1050 = new YAHOO.widget.TextNode(objd4e1050, root, false);var objd4e1066 = { label: "DITA-OT Architecture", href:"dev_ref/DITA-OTArchitecture.html", target:"contentwin" };
    var d4e1066 = new YAHOO.widget.TextNode(objd4e1066, d4e1050, false);var objd4e1076 = { label: "Processing structure", href:"dev_ref/processing-structure.html", target:"contentwin" };
    var d4e1076 = new YAHOO.widget.TextNode(objd4e1076, d4e1066, false);var objd4e1086 = { label: "Processing modules", href:"dev_ref/processing-pipeline-modules.html", target:"contentwin" };
    var d4e1086 = new YAHOO.widget.TextNode(objd4e1086, d4e1066, false);var objd4e1096 = { label: "Processing order", href:"dev_ref/processing-order.html", target:"contentwin" };
    var d4e1096 = new YAHOO.widget.TextNode(objd4e1096, d4e1066, false);var objd4e1106 = { label: "Pre-processing modules", href:"dev_ref/DITA-OTPreprocess.html", target:"contentwin" };
    var d4e1106 = new YAHOO.widget.TextNode(objd4e1106, d4e1066, false);var objd4e1116 = { label: "Generate lists (gen-list)", href:"dev_ref/preprocess-genlist.html", target:"contentwin" };
    var d4e1116 = new YAHOO.widget.TextNode(objd4e1116, d4e1106, false);var objd4e1129 = { label: "Debug and filter (debug-filter)", href:"dev_ref/preprocess-debugfilter.html", target:"contentwin" };
    var d4e1129 = new YAHOO.widget.TextNode(objd4e1129, d4e1106, false);var objd4e1142 = { label: "Copy related files (copy-files)", href:"dev_ref/preprocess-copyfiles.html", target:"contentwin" };
    var d4e1142 = new YAHOO.widget.TextNode(objd4e1142, d4e1106, false);var objd4e1155 = { label: "Resolve keyref (keyref)", href:"dev_ref/preprocess-keyref.html", target:"contentwin" };
    var d4e1155 = new YAHOO.widget.TextNode(objd4e1155, d4e1106, false);var objd4e1168 = { label: "Conref push (conrefpush)", href:"dev_ref/preprocess-conrefpush.html", target:"contentwin" };
    var d4e1168 = new YAHOO.widget.TextNode(objd4e1168, d4e1106, false);var objd4e1181 = { label: "Conref (conref)", href:"dev_ref/preprocess-conref.html", target:"contentwin" };
    var d4e1181 = new YAHOO.widget.TextNode(objd4e1181, d4e1106, false);var objd4e1194 = { label: "Move metadata (move-meta-entries)", href:"dev_ref/preprocess-metadata.html", target:"contentwin" };
    var d4e1194 = new YAHOO.widget.TextNode(objd4e1194, d4e1106, false);var objd4e1207 = { label: "Resolve code references (coderef)", href:"dev_ref/preprocess-coderef.html", target:"contentwin" };
    var d4e1207 = new YAHOO.widget.TextNode(objd4e1207, d4e1106, false);var objd4e1220 = { label: "Resolve map references (mapref)", href:"dev_ref/preprocess-mapref.html", target:"contentwin" };
    var d4e1220 = new YAHOO.widget.TextNode(objd4e1220, d4e1106, false);var objd4e1233 = { label: "Pull content into maps (mappull)", href:"dev_ref/preprocess-mappull.html", target:"contentwin" };
    var d4e1233 = new YAHOO.widget.TextNode(objd4e1233, d4e1106, false);var objd4e1247 = { label: "Chunk topics (chunk)", href:"dev_ref/preprocess-chunk.html", target:"contentwin" };
    var d4e1247 = new YAHOO.widget.TextNode(objd4e1247, d4e1106, false);var objd4e1260 = { label: "Map based linking (maplink)", href:"dev_ref/preprocess-maplink.html", target:"contentwin" };
    var d4e1260 = new YAHOO.widget.TextNode(objd4e1260, d4e1106, false);var objd4e1270 = { label: "Pull content into topics (topicpull)", href:"dev_ref/preprocess-topicpull.html", target:"contentwin" };
    var d4e1270 = new YAHOO.widget.TextNode(objd4e1270, d4e1106, false);var objd4e1283 = { label: "Flagging in the toolkit", href:"dev_ref/preprocess-flagging.html", target:"contentwin" };
    var d4e1283 = new YAHOO.widget.TextNode(objd4e1283, d4e1106, false);var objd4e1293 = { label: "HTML-based processing modules", href:"dev_ref/XhtmlWithNavigation.html", target:"contentwin" };
    var d4e1293 = new YAHOO.widget.TextNode(objd4e1293, d4e1066, false);var objd4e1303 = { label: "Common HTML-based processing", href:"dev_ref/XhtmlCommon.html", target:"contentwin" };
    var d4e1303 = new YAHOO.widget.TextNode(objd4e1303, d4e1293, false);var objd4e1313 = { label: "XHTML processing", href:"dev_ref/XhtmlDefault.html", target:"contentwin" };
    var d4e1313 = new YAHOO.widget.TextNode(objd4e1313, d4e1293, false);var objd4e1332 = { label: "HTML5 processing", href:"dev_ref/html5.html", target:"contentwin" };
    var d4e1332 = new YAHOO.widget.TextNode(objd4e1332, d4e1293, false);var objd4e1351 = { label: "Eclipse help processing", href:"dev_ref/XhtmlEclipse.html", target:"contentwin" };
    var d4e1351 = new YAHOO.widget.TextNode(objd4e1351, d4e1293, false);var objd4e1367 = { label: "TocJS processing", href:"dev_ref/XhtmlTocjs.html", target:"contentwin" };
    var d4e1367 = new YAHOO.widget.TextNode(objd4e1367, d4e1293, false);var objd4e1380 = { label: "HTML Help processing", href:"dev_ref/XhtmlCHM.html", target:"contentwin" };
    var d4e1380 = new YAHOO.widget.TextNode(objd4e1380, d4e1293, false);var objd4e1393 = { label: "JavaHelp processing", href:"dev_ref/XhtmlJavahelp.html", target:"contentwin" };
    var d4e1393 = new YAHOO.widget.TextNode(objd4e1393, d4e1293, false);var objd4e1406 = { label: "PDF processing modules", href:"dev_ref/PdfDefault.html", target:"contentwin" };
    var d4e1406 = new YAHOO.widget.TextNode(objd4e1406, d4e1066, false);var objd4e1422 = { label: "Open Document Format processing modules", href:"dev_ref/OdtDefault.html", target:"contentwin" };
    var d4e1422 = new YAHOO.widget.TextNode(objd4e1422, d4e1066, false);var objd4e1435 = { label: "Extending the DITA-OT", href:"dev_ref/extending-the-ot.html", target:"contentwin" };
    var d4e1435 = new YAHOO.widget.TextNode(objd4e1435, d4e1050, false);var objd4e1445 = { label: "Manually installing plug-ins", href:"dev_ref/plugins-installing.html", target:"contentwin" };
    var d4e1445 = new YAHOO.widget.TextNode(objd4e1445, d4e1435, false);var objd4e1455 = { label: "Manually removing plug-ins", href:"dev_ref/plugins-removing.html", target:"contentwin" };
    var d4e1455 = new YAHOO.widget.TextNode(objd4e1455, d4e1435, false);var objd4e1465 = { label: "Rebuilding the DITA-OT documentation", href:"dev_ref/rebuilding-the-dita-ot-documentation.html", target:"contentwin" };
    var d4e1465 = new YAHOO.widget.TextNode(objd4e1465, d4e1435, false);var objd4e1475 = { label: "Creating plug-ins", href:"dev_ref/plugins-overview.html", target:"contentwin" };
    var d4e1475 = new YAHOO.widget.TextNode(objd4e1475, d4e1050, false);var objd4e1485 = { label: "Plug-in configuration file", href:"dev_ref/plugin-configfile.html", target:"contentwin" };
    var d4e1485 = new YAHOO.widget.TextNode(objd4e1485, d4e1475, false);var objd4e1498 = { label: "Extending the XML Catalog", href:"dev_ref/plugin-xmlcatalog.html", target:"contentwin" };
    var d4e1498 = new YAHOO.widget.TextNode(objd4e1498, d4e1475, false);var objd4e1508 = { label: "Adding new targets to the Ant build process", href:"dev_ref/plugin-anttarget.html", target:"contentwin" };
    var d4e1508 = new YAHOO.widget.TextNode(objd4e1508, d4e1475, false);var objd4e1518 = { label: "Adding Ant targets to the pre-process pipeline", href:"dev_ref/plugin-antpreprocess.html", target:"contentwin" };
    var d4e1518 = new YAHOO.widget.TextNode(objd4e1518, d4e1475, false);var objd4e1528 = { label: "Integrating a new transformation type", href:"dev_ref/plugin-newtranstype.html", target:"contentwin" };
    var d4e1528 = new YAHOO.widget.TextNode(objd4e1528, d4e1475, false);var objd4e1538 = { label: "Override styles with XSLT", href:"dev_ref/plugin-overridestyle.html", target:"contentwin" };
    var d4e1538 = new YAHOO.widget.TextNode(objd4e1538, d4e1475, false);var objd4e1551 = { label: "Modifying or adding generated text", href:"dev_ref/plugin-addgeneratedtext.html", target:"contentwin" };
    var d4e1551 = new YAHOO.widget.TextNode(objd4e1551, d4e1475, false);var objd4e1561 = { label: "Passing parameters to existing XSLT steps", href:"dev_ref/plugin-xsltparams.html", target:"contentwin" };
    var d4e1561 = new YAHOO.widget.TextNode(objd4e1561, d4e1475, false);var objd4e1574 = { label: "Adding Java libraries to the classpath", href:"dev_ref/plugin-javalib.html", target:"contentwin" };
    var d4e1574 = new YAHOO.widget.TextNode(objd4e1574, d4e1475, false);var objd4e1584 = { label: "Adding diagnostic messages", href:"dev_ref/plugin-messages.html", target:"contentwin" };
    var d4e1584 = new YAHOO.widget.TextNode(objd4e1584, d4e1475, false);var objd4e1595 = { label: "Managing plug-in dependencies", href:"dev_ref/plugin-dependencies.html", target:"contentwin" };
    var d4e1595 = new YAHOO.widget.TextNode(objd4e1595, d4e1475, false);var objd4e1617 = { label: "Version and support information", href:"dev_ref/plugin-support.html", target:"contentwin" };
    var d4e1617 = new YAHOO.widget.TextNode(objd4e1617, d4e1475, false);var objd4e1627 = { label: "Creating a new plug-in extension point", href:"dev_ref/plugin-newextensions.html", target:"contentwin" };
    var d4e1627 = new YAHOO.widget.TextNode(objd4e1627, d4e1475, false);var objd4e1640 = { label: "Example plugin.xml file", href:"dev_ref/plugin-sample.html", target:"contentwin" };
    var d4e1640 = new YAHOO.widget.TextNode(objd4e1640, d4e1475, false);var objd4e1653 = { label: "Migrating style sheets and XSLT overrides", href:"dev_ref/flagging-migration.html", target:"contentwin" };
    var d4e1653 = new YAHOO.widget.TextNode(objd4e1653, d4e1050, false);var objd4e1661 = { label: "Customizing PDF output", href:"user-guide/dita2pdf-customization.html", target:"contentwin" };
    var d4e1661 = new YAHOO.widget.TextNode(objd4e1661, d4e1050, false);var objd4e1671 = { label: "Implementation dependent features", href:"dev_ref/DITA1.2-implementation-dependent-features.html", target:"contentwin" };
    var d4e1671 = new YAHOO.widget.TextNode(objd4e1671, d4e1050, false);var objd4e1678 = { label: "Extended functionality", href:"dev_ref/extended-functionality.html", target:"contentwin" };
    var d4e1678 = new YAHOO.widget.TextNode(objd4e1678, d4e1050, false);
  var objd4e1686 = { label: "DITA and DITA-OT resources", href:"user-guide/dita-and-dita-ot-resources.html", target:"contentwin" };
    var d4e1686 = new YAHOO.widget.TextNode(objd4e1686, root, false);var objd4e1696 = { label: "Project page at dita.xml.org", href:"http://dita.xml.org/wiki/the-dita-open-toolkit", target:"contentwin" };
    var d4e1696 = new YAHOO.widget.TextNode(objd4e1696, d4e1686, false);var objd4e1707 = { label: "Yahoo! dita-users group", href:"http://groups.yahoo.com/group/dita-users/", target:"contentwin" };
    var d4e1707 = new YAHOO.widget.TextNode(objd4e1707, d4e1686, false);var objd4e1717 = { label: "OASIS DITA Technical Committee ", href:"http://www.oasis-open.org/committees/dita/", target:"contentwin" };
    var d4e1717 = new YAHOO.widget.TextNode(objd4e1717, d4e1686, false);var objd4e1727 = { label: "Web-based resources", href:"user-guide/web-based-resources.html", target:"contentwin" };
    var d4e1727 = new YAHOO.widget.TextNode(objd4e1727, d4e1686, false);
  
  

      tree.draw(); 
      } 
      
      YAHOO.util.Event.addListener(window, "load", treeInit); 
    