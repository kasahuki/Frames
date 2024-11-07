import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

// defineStore 函数的第一个参数是 store 的名字
export const useCounterStore = defineStore('counter', () => {
    // 声明数据 state
  const count = ref(100)
  const msg = ref('hello pinia')
  const increment = () => {
    count.value++
  }
    // 声明操作数据的方法 aution
  const decrement = () => {
    count.value--
  }

  const double = computed(() => {
    return count.value * 2
  })
    //声明基于数据派生的计算属性 getters
    // 最后 return  一个对象
    // 要记住暴露出去
    return {
      count,
      msg,
      increment,
      decrement,
      double

    }
})
// 仓库返回的是一个函数