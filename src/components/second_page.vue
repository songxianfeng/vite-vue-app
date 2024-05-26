<template>
    <el-row>
        <el-col :span="24">
            <h1>这是一个测试页面</h1>
        </el-col>
    </el-row>
    <el-row>
        <el-col :span="24">
            <el-text style="font-size: x-large" type="primary">
                道可道，非常道；名可名，非常名。无名天地之始，有名万物之母。故常无欲，以观其妙；常有欲，以观其徼（jiào）。此两者同出而异名，同谓之玄，玄之又玄，众妙之门。
            </el-text>
        </el-col>
    </el-row>
    <el-row style="margin-top: 20px">
        <el-col :span="24">
            <el-button type="primary"  @click="goback">打开计算器</el-button>
        </el-col>
    </el-row>
</template>
<script>
    export default {
        name: 'second_page',
        data() {
            return {};
        },
        methods:{
            goback(){
                console.log("click goback!")
                this.$router.push({
                    path:"/calculator",
                });
            }
        }
    }
</script>
<style>
</style>