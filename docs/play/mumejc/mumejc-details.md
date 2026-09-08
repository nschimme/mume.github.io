---
title: MUMEjc Details
---

<style scoped>
.indented {
  background: #222;
  margin-left: 1em;
  margin-right: 1em;
  padding: 1em;
  margin-top: 1px;
  margin-bottom: 1px;
  border-radius: 4px;
}
tt {
  background: #552;
  padding: 2px;
  border: 1px dotted gray;
}
</style>

# MUMEjc Details

## History & Improvements

<div class="indented">
  <p>MUMEjc started its life as a few minor MUDjc bug-fixes in 2011, but the project soon turned into an almost-total-rewrite and then sat dormant for two years before being polished in 2013. In Feb 2013, MUMEjc had about seven times as many source lines as the 1999 version of MUDjc. Today MUMEjc is almost completely free of any code derived from the original MUDjc, but its MUDjc heritage is honored in the name MUMEjc.</p>

  <p>MUMEjc's major improvements over MUDjc include:</p>

  <ul>
    <li>negotiates Telnet ECHO, NAWS (window size) and TERM-TYPE options</li>
    <li>understands the server echo protocol
      <ul>
        <li>uses gray-on-white in password mode</li>
        <li>doesn't echo passwords to the terminal</li>
        <li>keeps passwords out of the up-arrow history</li>
      </ul>
    </li>
    <li>handles MUME's client-side editing protocol</li>
    <li>parses MUME's XML mode</li>
    <li>starts in UTF-8 and automatically switches to Latin-1 if necessary</li>
    <li>has better ANSI support
      <ul>
        <li>renders ANSI bold/italic/strike/underline and 256 colors (i.e. 16 foreground x 16 background colors)</li>
        <li>can replace ANSI escape with &lt;ESC&gt;, and it can strip out ANSI codes</li>
        <li>has several standard ANSI color schemes (e.g. HTML, putty, VGA, xterm)</li>
        <li>has several "default background" color options</li>
      </ul>
    </li>
    <li>understands ^H (CTRL+H, backspace), ^W (delete word) and ^U (delete line) in the input box; also clears the input if you hit the ESC (escape) key</li>
    <li>allows up to 10k lines of scrollback (vs. 320 lines in MUDjc)</li>
    <li>includes rudimentary function-key and number-pad key-bindings, and includes an option to do "keypad walking" by translating the number pad bindings to direction commands</li>
  </ul>
</div>

## Known Limitations

<div class="indented">
  <ul>
    <li>Doesn't attempt to detect or thwart manual interference with the client-side editing protocol (this is a pseudo-feature for advanced use; technically it should modify newlines to prevent interference, but MUME apparently doesn't honor the LF-only part of the protocol that it uses when it sends the protocol).</li>
    <li>Allows UTF-8 input but only supports Latin-1 output; MUME allows clients that read UTF-8 and write Latin-1, but other MUDs may not.</li>
    <li>Doesn't attempt to handle ANSI codes like blink, dim, conceal or double-underline, and it ignores all cursor-movement ANSI codes.</li>
    <li>Doesn't completely conceal passwords; it just makes the text gray-on-white. There is a technical trade-off between having standard editor movements and having the ability to show stars. MUMEjc's maintainer thinks usability trumps a false sense of privacy.</li>
    <li>Large scrollback buffers or edits can cause the JVM to crash after running out of memory; no attempt has been made to detect an impending out-of-memory exception, so the user has to avoid making too many edit windows or making the edits too large; this is slightly helped by the fact that MUME edits cannot be larger than 128 kiB (131 kB).</li>
    <li>Doesn't support searching of scrollback buffer, edits or views.</li>
    <li>Doesn't support text justification in the edit window, but it does display line and column information.</li>
    <li>Java forbids unsigned applets to access the system clipboard, but it's still possible to copy-and-paste between windows created by the same applet.</li>
  </ul>
</div>

## Applet Requirements

<div class="indented">
  <ul>
    <li>Requires Java 7 or higher (note: Oracle stopped supporting Java 6 in Feb 2013).</li>
    <li>Requires a web-browser that supports <code>&amp;lt;APPLET&amp;gt;</code> tags.</li>
    <li>Requires at least 64 MB (61 MiB) of RAM available to the Java process.</li>
  </ul>

  <p>That may seem like a lot, but that's slightly below the typical default minimum for applets (64 MiB = 67.1MB). Also, Java's "Swing" UI uses tons of RAM for double-buffering (approx 12MB in HD full-screen on Linux), and the JTextPane also uses a ton of RAM (approx 1 MB per 1k lines).</p>

  <p>Watch the memory display carefully if you plan to edit large files, because each editor has its own potentially-huge back buffer.</p>

  <p>If you're worried of running out of memory, you can modify the memory available to applets by adding either <b><tt>-Xmx128M</tt></b> or <b><tt>-Xmx256M</tt></b> to the runtime parameters field in your Java Control Panel.</p>
</div>

## Stand-Alone Mode

<div class="indented">
  <p>MUMEjc can be run in stand-alone mode by typing <tt>java -cp mumejc.jar org.mume.Client mume.org 4242</tt> on the command line from the directory where you've downloaded <b>mumejc.jar</b> from the MUME website.</p>

  <p>You can specify a limit of 128 MB of RAM by typing <tt>java -cp mumejc.jar -Xmx128M org.mume.Client mume.org 4242</tt>; this option is recommended if you plan to use the client-side editing feature.</p>

  <p>The requirements for stand-alone mode are the same as the ones for the Applet mode, except it does not require a web browser.</p>

  <h3>Stand-Alone Pros</h3>

  <ul>
    <li>Doesn't require you to enable the Java plug-in in your web browser.</li>
    <li>Can connect to a different MUD (other than MUME) or to a mapper program running on your PC (or laptop).</li>
    <li>Can access the system clipboard because it runs with fewer security restrictions than an applet; this is a <em>major</em> advantage for builders and mudllers using the client-side editing feature.</li>
  </ul>

  <h3>Stand-Alone Cons</h3>

  <ul>
    <li>The stand-alone version will not be updated when the website's version is updated, so you will need to manually check for updates and download them yourself.</li>
  </ul>
</div>

## Version Numbers

<div class="indented">
  <p>MUMEjc's version numbers are of the form YYYY.MM.DD.{git-revision}. The git revision is a non-consecutive 7-digit hex number that is only meaningful as a pointer to source control information. MUMEjc's version number is displayed in the status prompt. It can also be found by typing <tt>#version</tt> in the client.</p>

  <p>Older revisions of the client may be kept on the MUME website for "a while" after a newer release becomes available. This will allow users to download the JAR file for the specific version for use as a stand-alone client.</p>
</div>

## License

<div class="indented">
  <p>MUMEjc is free-to-use, closed-source software. MUMEjc's copyright information can be obtained by typing <tt>#copyright</tt>. Feel free to use MUMEjc on another MUD's website; it will connect to the host website's IP address on port 23 by default, but you can use the applet tag <tt>&lt;param name=port value=4242&gt;</tt> to specify another port.</p>
</div>
