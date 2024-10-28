<template>
  <div class="container">
    <table>
        <thead>
            <tr>
                <th>id</th>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Occupation</th> 
                <th>Salary</th>
                <th>opration</th>
            </tr>
        </thead>
        <tbody>
          <!-- item 就是 persons 对象数组中的每一项 -->
            <tr v-for="(person, index) in persons" :key="index">
                <td>{{ index+1 }}</td>
                <td>{{ person.name }}</td>
                <td>{{ person.age }}</td>
                <td>{{ person.gender }}</td>
                <td>{{ person.occupation }}</td>                
                <td>{{ person.salary }}</td>  
                <td><slot :row="person"></slot></td> 
                <!-- 子传父 -->
            </tr>
        </tbody>
        <!-- 子组件渲染 -->
    </table>
  </div>
</template>
  
<script>
export default {
  props: {    
    persons: {
      type: Array,
      required: true
    }
  }

}
</script>

<style scoped>
  table
  {
    border-bottom: 1px solid #000;
    width: 100%;
  }
    th, td
  {
    text-align: center;
    padding: 8px;
    border-bottom: 1px solid #ddd;  
  }
</style>