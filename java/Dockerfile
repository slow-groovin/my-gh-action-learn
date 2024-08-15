#
FROM amazoncorretto:21-alpine3.18

# 设置工作目录
WORKDIR /app

# 将构建好的JAR文件复制到容器中
COPY target/demo-0.0.1-SNAPSHOT.jar app.jar

# 暴露应用运行端口
EXPOSE 8080

# 设置容器启动时运行的命令
ENTRYPOINT ["java", "-jar", "app.jar"]
