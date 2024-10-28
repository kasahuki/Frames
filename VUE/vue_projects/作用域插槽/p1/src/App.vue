<template>
    <div class="app">
        <StableComponent :persons="persons1">
            <template #default="obj">
                <button @click="del(obj.row.id)">删除</button>
                <!-- 体会下为什么能一一对应 -->
            </template>
           <!-- 父组件接受到子组件的值 -->
        </StableComponent>
        <br>
        <br>
         <StableComponent :persons="persons2">
            <template #default="obj">
                <button @click="view(obj.row)">查看</button>
            </template>
                
          
            
        </StableComponent>
    </div>
</template>

<script>
import StableComponent from './components/StableComponent.vue'
export default {
    components: {        
        StableComponent
    } ,  
    //导入后注册
    //父组件中传数据给子组件
    data() {   
      return {
        persons1: [
          { id: 1, name: 'John', age: 25, gender: 'Male', occupation: 'Software Engineer', salary: 50000 },
          { id: 2, name: 'Jane', age: 30, gender: 'Female', occupation: 'Doctor', salary: 60000 },
          { id: 3, name: 'Bob', age: 40, gender: 'Male', occupation: 'Teacher', salary: 70000 },    
          { id: 4,name: 'Alice', age: 35, gender: 'Female', occupation: 'Designer', salary: 55000 },  

        ],
        persons2: [ 
            { name: 'Mary', age: 28, gender: 'Female', occupation: 'Accountant', salary: 40000 },      
            { name: 'Tom', age: 35, gender: 'Male', occupation: 'Lawyer', salary: 80000 },
            { name: 'Lisa', age: 27, gender: 'Female', occupation: 'Engineer', salary: 55000 },     
            { name: 'David', age: 45, gender: 'Male', occupation: 'Architect', salary: 90000 },  
        ]

      }
   } ,
   methods: {       
      del(id) {
        this.persons1 = this.persons1.filter(person => person.id !== id)
      },
      view(person) {
     alert(`${person.name} 's salary is ${person.salary}`)
 
   }

   },
  

}
</script>

<style>

</style>