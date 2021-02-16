import { onMounted, onUnmounted } from 'vue'

export default function useWindowEvent(eventName, handleEvent) {
  // for Calculator
  /* onMounted(() => {
      window.addEventListener("keydown", handleKeydown);
    }) */
  onMounted(() => window.addEventListener(eventName, handleEvent))

  /* onUnmounted(() => {
      window.removeEventListener("keydown", handleKeydown);
    }) */
  onUnmounted(() => window.removeEventListener(eventName, handleEvent))
}