# 复现单例Service中无法InjectEntityModel的问题

基于midwayjs-web脚手架

1. 添加了一个photo entity
2. 将示例代码中的user service声明为单例
3. 调用demo接口http://127.0.0.1:7001/api/get_user 可以看到注入的model为空,导致报错
4. 解除service的单例声明,可以正常运行
