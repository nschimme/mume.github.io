<template>
  <table class="session-table" border="1" align="center">
    <tbody>
      <tr>
        <td class="msg_body">
          <pre class="session"><slot></slot></pre>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
</script>

<style scoped>
.session-table {
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0;
}
</style>
