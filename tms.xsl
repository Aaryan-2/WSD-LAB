<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html> 
<body>
  <h2>Travel Management System</h2>
  <table border="1">
    <tr bgcolor="#9acd32">
      <th style="text-align:left">Name</th>
      <th style="text-align:left">Type</th>
      <th style="text-align:left">Location</th>
      <th style="text-align:left">Price</th>
      <th style="text-align:left">Date</th>
    </tr>
    <xsl:for-each select="catalog/travel">
    <xsl:sort select="name"/>
    <tr>
      <td><xsl:value-of select="name"/></td>
      <td><xsl:value-of select="type"/></td>
      <td><xsl:value-of select="location"/></td>
      <td><xsl:value-of select="price"/></td>
      <td><xsl:value-of select="date"/></td>
    </tr>
    </xsl:for-each>
  </table>
</body>
</html>
</xsl:template>
</xsl:stylesheet>

