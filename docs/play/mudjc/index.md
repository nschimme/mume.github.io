---
title: MUDjc
---

# MUDjc

<script setup>
function runMudjc() {
  if (typeof window !== 'undefined') {
    window.open('mudjc.html', 'client', 'width=660,height=600,resizable=yes,scrollbars=yes')
  }
}
</script>

You can play MUME through Nils Meier's Java Client, MUDjc.

You need a JDK 1.0.2 compliant browser with JAR-support to run this applet.

* Click on this [link](./browser) to run MUDjc in this browser window.
* Click on the button below to run the MUDjc applet in a new window:

  <p>
    <button @click="runMudjc" class="btn" style="padding: 0.5rem 1rem; cursor: pointer; font-weight: bold;">
      Run MUDjc
    </button>
  </p>

---

MUDjc was last updated in 1999. If you have Java 7 or higher, we highly recommend using [MUMEjc](../mumejc/) instead.
