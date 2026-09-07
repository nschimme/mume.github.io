---
title: MUMEjc
---

# MUMEjc

<script setup>
import { ref } from 'vue'

const showWhatIs = ref(false)
const showTroubleshooting = ref(false)

function toggleWhatIs() {
  showWhatIs.value = !showWhatIs.value
}

function toggleTroubleshooting() {
  showTroubleshooting.value = !showTroubleshooting.value
}

function play() {
  if (typeof window !== 'undefined') {
    window.open('play.html', 'MUMEjc', 'width=660,height=600,resizable=yes,scrollbars=yes,toolbar=no')
  }
}
</script>

## Play!

<div class="indented">

<button @click="play" class="btn" style="padding: 0.5rem 1rem; cursor: pointer; font-weight: bold; margin-bottom: 1rem;">Play MUME in your web browser</button>

Either click the button above, or use this <a href="./play.html">link</a> to play MUME in your web browser.

</div>

## Quick Help

<div class="indented">

The main links in this section toggle the visibility of quick help sections.

* <a href="#what-is-mumejc" @click.prevent="toggleWhatIs">What is MUMEjc?</a>

  <div v-show="showWhatIs" class="indented" style="margin-top: 0.5rem;">

  MUMEjc is a simple MUD client with ANSI color support; it's better than using raw Telnet. It's not as nice as powTTY (windows) or powwow (mac or linux), but it does support MUME's client-side editing protocol.

  The client can be run stand-alone or as an applet embedded in your web browser. Both versions require Java 7 or higher. You can launch the applet from the **Play!** section of this page, or you can read how to use the stand-alone version on the [MUMEjc details](./mumejc-details) page.

  </div>

* <a href="#troubleshooting" @click.prevent="toggleTroubleshooting">Troubleshooting</a>

  <div v-show="showTroubleshooting" class="indented" style="margin-top: 0.5rem;">

  The MUMEjc applet requires Java 7 or higher, a web browser that supports the Java plug-in and `<APPLET>` tags, and at least 64MB of RAM for the Java process.

  * As of Nov 2013, most web browsers now have the Java plug-in disabled by default, so you might have to enable or install the Java plug-in to run MUMEjc in your web browser.
    * See: [How to enable Java in your web browser](http://java.com/en/download/help/enable_browser.xml) [java.com]

  * The MUMEjc applet is not signed, so if you get a menacing pop-up from your web browser that tells you that you're trying to run an unsigned applet:
    1. Verify that the applet's location is **http://mume.org/**.
    2. Check the box by "I accept the risk and want to run this app." (or similar)
    3. Select **Run**.

  </div>

</div>

## Bugs? Typos? Ideas?

<div class="indented">

MUMEjc is supported by Mint.

Please [MUME-mail](https://mume.org/help/) @mint to report any bugs, typos or ideas for MUMEjc.

Be sure to include the client's version number in your report; you can type `#version` in the client to get the version number.

</div>
