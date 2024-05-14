---
Summary: You can use special wiki text markup to do a wide variety of cool and useful
  things on TeamForge wiki pages.
category: ''
id: wiki-wikisyntax
keywords:
- wiki syntax
- syntax of the wiki
lastUpdatedAt: Mar 21, 2018
product: teamforge
tags:
- project_member_tasks
- wiki
title: Wiki Syntax
---


For a quick introduction, see the [documentation for JSPwiki](http://www.ecyrd.com/JSPWiki/wiki/TextFormattingRules), which is the wiki engine that drives the TeamForge wiki tool.

## Text Effects on Wiki Pages

Wiki markup is great for making text look the way you need it to look.

:::note
These tools are for use only when you are editing a wiki page in text mode. If you try to use them in WYSIWYG mode, they are displayed just the way you typed them in, which is not what you want.
:::


| Syntax | Effect | Details |
|--------|--------|---------|
| - - - - | Creates a horizontal rule. | |
| `\\` | Creates a line break. | |
| !!!text | Creates a level 1 (large) header. | |
| !!text | Creates a level 2 (medium) header. | |
| !text | Creates a level 3 (small) header. | |
| ' 'text' ' | Creates italic text. (That's two single quotes on each side.) | |
| \_\_text\_\_ | Creates bold text. (That's two underscores on each side.) | |
| \{\{text\}\} | Creates monospaced text. | |
| *text | Creates a bulleted list item. | |
| #text | Creates a numbered list item. | |
| ;term:ex | Creates a definition for the word "term'"with the explanation "ex." | |
| \{\{\{text\}\}\} | Creates pre-formatted text. | |
| %%(\<css-style\>)\<your text\>%% | Defines a CSS style command. |%%(font-size: 150%; color: red;) Hello, world!%% |
| Blank line | Starts a new paragraph.| |

## Bring TeamForge Data into Wiki Pages

Use this markup format to bring in data from elsewhere on your TeamForge site.

:::note
These are for use only when you are editing a wiki page in text mode. If you try to use them in WYSIWYG mode, they are displayed just the way you typed them in, which is not what you want.
:::

| Syntax                                                 | Effect                                                        | Details                                                                                                                  |
|--------------------------------------------------------|---------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------|
| [\{INSERT ExcelToHTMLPlugin src='c:\somesheet.xls'\}] or [\{INSERT ExcelToHTMLPlugin border='1' src='\\the_server\somesheet.xls'\}] | Reads a Microsoft Excel file and displays it as an HTML table. | Parameters:<br></br><ul><li>src: URL / Attachment file name</li><li>`srcsheet`: Sheet name</li><li>`height`: height attribute for the HTML table</li><li>`width`: width attribute for the HTML table</li><li>`border`: border attribute for the HTML table</li></ul><br></br> More at [ExcelToHTMLPlugin](http://www.ecyrd.com/JSPWiki/wiki/ExcelToHTMLPlugin) |

## Text Navigation Tools for Wiki Pages

You can use wiki syntax to help readers get around.

:::note
To use these tools, copy and paste the sample syntax into your Wiki page in \"Plain Editor\" mode, then customize it appropriately.
:::

| Syntax                                | Effect                                                       | Details                                                                                                                                                                         |
|---------------------------------------|--------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `%%insert-toc%%`                     | Creates a table of contents consisting of the header text on the page.                                                |                                                                                                                                                                                 |
| `[link]`                              | Creates a link to a new Wiki page called "link."            | If the link is a complete URL, a link to the URL is created. If the link points to a .gif, .jpg, or .png image, the image is rendered directly in the page.                    |
| `[title\|link]`                       | Creates a link to a new Wiki page called "link" with the text "title" displayed for the URL. | If the link is a complete URL, a link to the URL is created. If the link points to a .gif, .jpg, or .png image, the image is rendered directly on the page with "title" as ALT text. |
| `~TestText`                           | Disables link creation for a CamelCase word.                | CamelCase words are two or more uppercase words with no spaces. By default, a CamelCase word automatically creates a link to a new Wiki page.                                   |
| `[link]`                              | Creates the text "[link]."                                 |                                                                                                                                                                                 |
| `[{IFramePlugin url='http://open.collab.net/' width='100%' height='500' border='1' scrolling='yes' align='center'}]` | Embeds an iframe into a wiki page.                      | - `attachment`: Attachment path, e.g. 'IFramePlugin.jar(info)' - `url`: A URL, e.g 'http://www.google.com' - `align`: Align the iFrame to left/center/right - `border`: Whether there is a border or not - `width`: Width of the iFrame - `height`: Height of the iFrame - `marginwidth`: Margin width of the iFrame - `marginheight`: Margin height of the iFrame - `scrolling`: Whether the iFrame can be scrolled or not See [http://www.ecyrd.com/JSPWiki/wiki/iFramePlugin](http://www.ecyrd.com/JSPWiki/wiki/iFramePlugin) |
| `Tab Completion <Keyword+Tab>`       | You can type a keyword and hit the Tab key (under the Tab Completion mode). The editor will fill in with a sample template for the specific markup represented by the keyword. | - `link`: Inserts a sample link. - `h1`: Inserts level 1 heading sample. - `h2`: Inserts level 2 heading sample. - `h3`: Inserts level 3 heading sample. - `bold`: Inserts a bold text sample. - `italic`: Inserts an italics text sample. - `mono`: Inserts a mono text sample. - `sup`: Inserts a superscript sample. - `sub`: Inserts a subscript sample. - `strike`: Inserts a strike through text sample. - `br`: Inserts a line break. - `hr`: Inserts a horizontal line. - `pre`: Inserts a pre-formatted text sample. - `code`: Inserts a code block sample. - `dl`: Inserts a definition list block sample. - `toc`: Inserts the Table of Contents plugin syntax. - `tab`: Inserts a sample tabbed section block syntax. - `table`: Inserts a sample table syntax. - `img`: Inserts a sample image plugin syntax. - `quote`: Inserts a sample quoted text block. - `sign`: Inserts the user's signature. |


## Attachments for Wiki Pages

You can use wiki markup to bring in information from external sources.

:::note
These tools are for use only when you are editing a wiki page in text mode. If you try to use them in WYSIWYG mode, they are displayed just the way you typed them in, which is not what you want.
:::

| Syntax                                              | Effect                                                     | Details                                                                                                                                                   |
|-----------------------------------------------------|------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| `[WikiPageName/attachmentName]`                    | Embeds an attachment in the page.                          | If the attachment is a .gif, .jpg, or .png image file, the attachment will be embedded in the page; otherwise, the name of the attachment will display as a downloadable link. After adding attachments, the exact syntax for including the current page's attachments is shown next to each attachment's name in the Attachments section of the Edit Wiki page. You can use the same syntax to embed attachments from other wiki pages in the same project. |
| `[{InsertAttachment page='WikiPage/attachment'}]`  | Inserts the contents of an attachment (text file) into a page. | If the attachment is a text file, the content of the text file is inserted into the page. For more information, click [here](https://www.ecyrd.com/JSPWiki/wiki/InsertAttachment).<ul><li>This markup is for inserting content of a text file.</li><li>Files with the following extensions are allowed as attachment: .txt, .html, .xml, .cpp and .java.</li><li>In addition to image files, inserting files with the following extensions is not supported by this markup: .doc, .xls, .pdf, .zip, .jar.</li></ul> |
| `[{Mediaplayer src='fileName.wmv'}]`               | Embeds a Windows Media Player or Quicktime Player on a wiki page. | `src`: Media URL / Attachment file name<br></br>`playertype`: "mediaplayer" / "quicktime"<br></br>`width`, `height`: Dimension of the embedded media displayed<br></br>`movieheight`, `moviewidth`: Dimension of the display screen<br></br>`caption`: Caption to be displayed below the media player<br></br>`control`: Displays Control bar. `mediaplayer`: 1 (Show) / 0 (Hide); `quicktime`: true (Show) / false (Hide)<br></br>`autostart`: Play automatically. `mediaplayer`: 1 (Auto) / 0 (Manual, Click to play); `quicktime`: true (Auto) / false (Manual, Click to play)<br></br>`autorewind`: Automatically rewinds when play ends. `mediaplayer`: 1 (Auto Rewind) / 0 (Play once); `quicktime`: true (Auto Rewind) / false (Play once)<br></br>`playcount`: Number of times the movie will play. 0 represents always play.<br></br>See [here](http://www.ecyrd.com/JSPWiki/wiki/MediaPlayerPlugin) |
| `[{INSERT ExcelToHTMLPlugin src='WikiPage\somesheet.xls'}]` or `[{INSERT ExcelToHTMLPlugin border='1' src='\\the_server\somesheet.xls'}]` | Reads a Microsoft Excel file and displays it as an HTML table. | **Parameters:**<ul><li>`src`: URL / Attachment file name</li><li>`srcsheet`: Sheet name</li><li>`height`: height attribute for the html table</li><li>`width`: width attribute for the html table</li></ul>More at [here](http://www.ecyrd.com/JSPWiki/wiki/ExcelToHTMLPlugin) |
| `[{arnaud.Flash src='yourAttachedFlash.swf'}]`    | Embeds a Flash Player on your wiki page.                  | `width='n'`<br></br>`height='n'`<br></br>`controls='true|false'`<br></br>`play='true|false'`<br></br>`loop='true|false'`<br></br>`parameters='param1=value1, &param2=value2'`<br></br>See [here](http://www.ecyrd.com/JSPWiki/wiki/AFlashPlugin) |
| `[{IFramePlugin url='http://open.collab.net/' width='100%' height='500' border='1' scrolling='yes' align='center'}]` | Embeds an iframe into a wiki page. | **Parameters:**<ul><li>`attachment`: Attachment path, e.g. 'IFramePlugin.jar(info)'</li><li>`url`: A URL, e.g 'http://www.google.com'</li><li>`align`: Align the iFrame to left/center/right</li><li>`border`: Whether there is a border or not</li><li>`width`: Width of the iFrame</li><li>`height`: Height of the iFrame</li><li>`marginwidth`: Margin width of the iFrame</li><li>`marginheight`: Margin height of the iFrame</li><li>`scrolling`: Whether the iFrame can be scrolled or not</li></ul>See [here](http://www.ecyrd.com/JSPWiki/wiki/iFramePlugin) |


## Tables on Wiki Pages

You can use wiki markup to organize information in tables on a wiki page.

:::note
These tools are for use only when you are editing a wiki page in text mode. If you try to use them in WYSIWYG mode, they are displayed just the way you typed them in, which is not what you want.
:::

| Syntax | Effect | Details |
| ------ | ------ | ------- |
| [\{Table \<table-parameters\> \| \| Table Header Example \| \| More... \| Table Data Example \| More... \}] | Inserts a table on the wiki page. See this page for the markup for table elements. | - **rowNumber**: *\<integer\>* - Row number starts counting at this value; default = 0 (used in conjunction with '#' syntax)
- **style**: *\<css-style\>* Add formatting to the table, e.g. style:'border=2px solid black;'
- **dataStyle**: *\<css-style\>* Format all data cells (prefixed by single pipe signs '|')
- **headerStyle**: *\<css-style\>* Format all header cells (prefixed by double pipe signs '||')
- **evenRowStyle**: *\<css-style\>* Format the even rows, e.g. evenRowStyle='background: #ffff00;'
- **oddRowStyle**: *\<css-style\>* Format the odd rows, e.g. oddRowStyle='color: red;' |
| \|\|head1\|\|head2 | Creates a table column with header text "head1" in the first cell and "head2" in the second cell. | |
| \|col1\|col2 | Creates a table row containing the text "col1" in the first cell and "col2" in the second cell. | |
| \|\<| Collapses a cell with the previous cell so it spans multiple columns. | [TablePlugin](http://www.ecyrd.com/JSPWiki/wiki/TablePlugin) |
| \|\|\<| Collapses a header cell with the previous header cell so it spans multiple columns. | [TablePlugin](http://www.ecyrd.com/JSPWiki/wiki/TablePlugin) |
| \|\^| Collapses a cell with the cell above so that it spans multiple rows. | [TablePlugin](http://www.ecyrd.com/JSPWiki/wiki/TablePlugin) |
| \|\|\^| Collapses a header cell with the header cell above so that it spans multiple rows. | [TablePlugin](http://www.ecyrd.com/JSPWiki/wiki/TablePlugin) |
| ( *\<css-style\>* ) | Inside a table cell, adds specific formatting to a cell. | [TablePlugin](http://www.ecyrd.com/JSPWiki/wiki/TablePlugin) |
| # | Inside a table cell, displays the current row number with auto row numbering. | [TablePlugin](http://www.ecyrd.com/JSPWiki/wiki/TablePlugin) |
| [\{INSERT ExcelToHTMLPlugin src='WikiPage\somesheet.xls'\}] or [\{INSERT ExcelToHTMLPlugin border='1' src='\\the_server\somesheet.xls'\}] | Reads a Microsoft Excel file that is attached to a wiki page, and displays it as an HTML table. | Parameters:
  - **src**: If the Excel file is attached to the current wiki page, this is the attachment file name. If it is attached to some other wiki page, this is the URL of the attachment.
  - **srcsheet**: Sheet name
  - **height**: height attribute for the html table
  - **width**: width attribute for the html table
  - **border**: border attribute for the html table
  - **cellpadding**: cellpadding attribute for the html table
  - **cellspacing**: cellspacing attribute for the html table
  - **background**: background attribute for the html table. Attachment file name is accepted as value
  - **backgroundcolor**: backgroundcolor attribute for the html table
  - **keepformat**: Formating specified in the excel sheet is applied for the html table.
    :::note
    The complete formating from excel sheet is not applied to the html table, for example, font, font size, etc are not applied and background color, foreground color, etc are applied. yes/no is accepted as value
    :::
  - **headercolor**: Foreground color for the header (eg: #dcdcdc)
  - **headerbackgroundcolor**: Background color for the header (eg: #adadad)
  - **evenrowcolor**: Foreground color for the even rows (eg: #adadad)
  - **evenrowbackgroundcolor**: Background color for the even rows (eg: #adadad)
  - **oddrowcolor**: Foreground color for the odd rows (eg: #adadad)
  - **oddrowbackgroundcolor**: Background color for the odd rows (eg: #adadad)
  - **tableclass**: Style class name for the HTML table
  - **headerclass**: Style class name for header
  - **evenrowclass**: Style class name for the even rows
  - **oddrowclass**: Style class name for the even rows
  - **stylesheet**: Stylesheet for the table. Attachment file name is accepted as value
  See [ExcelToHTMLPlugin](http://www.ecyrd.com/JSPWiki/wiki/ExcelToHTMLPlugin) |
| [\{TableOfContents \}]\\ | Creates a table of contents consisting of the header text on the page. | |


## Wiki Plugins

You can use pre-defined wiki plugins to format your current page.

| Plugin Name            | Details                                                                                      |
|------------------------|----------------------------------------------------------------------------------------------|
| Section Headings Template | Inserts a page template that includes a table of contents and several section headings. Typically, this can be used in a new or blank page. |
| Sortable Table         | Inserts a new table that can be sorted when you click on the column headers.                 |
| Zebra Table            | Inserts a new table that has alternating background colors for each row.                      |
| Table of Contents Plugin | This plugin automatically generates table of contents that provides links to all the headings on your page. |
| Insert Page Plugin     | This plugin will insert a copy of another page into the current page. You must specify the name of the page to insert. |
| Current Time Plugin    | This plugin displays the current date and local time of the server when the page is viewed.   |
| Insert Attachment      | The insert attachment plugin allows you to insert the contents of an attachment into a page.  |
| Media Player           | This is an embedded player in your wiki page, supporting Windows Media Player and Apple QuickTime. |
| Insert Table           | Additional table support including multi-line table editing, cell merging, and automatic row numbering. |
| Flash Player           | An embedded flash player for the wiki page.                                                   |
| Insert Excel           | Allows you to insert a Microsoft Excel file as a table.                                       |
| Insert iFrame          | Allows embedding attachments, external URLs, and files (relative to the docbase).             |
| Code to HTML           | Allows source code syntax to be rendered as an HTML output and supports syntax from 130 different programming languages. |
| Index Plugin           | Displays all the pages in the wiki in alphabetical order.                                     |
| Recent Changes Plugin  | Inserts the latest changes in order.                                                         |
| Referred Pages Plugin  | Finds and lists all the pages that are referred to by the current page. The depth parameter allows displaying a recursive tree of referred pages. |
| Referring Pages Plugin | Finds and lists all the pages that refer to the current page.                                 |
| Undefined Pages Plugin | Lists all the pages that are referred to but not yet created.                                 |
| Unused Pages Plugin    | Lists all the pages that are not currently referred to by any other page.                      |
| ExcelToHTMLPlugin      | Provides an HTML view for the Excel spreadsheet files.                                        |
| PDFPlugin              | Provides the PDF output for the files.                                                        |
| WikiContentToHTML Plugin | Exports a specific page to HTML.                                                              |
