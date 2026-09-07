<template>
  <table class="session-table" border="1" align="center">
    <tbody>
      <tr>
        <td class="msg_body">
          <slot></slot>
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
