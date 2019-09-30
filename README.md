# Getting Started

```
# Install dependencies
npm install

# Start development live-reload server
npm run dev

# Start production server:
npm start
```

# Docker Support

```
# Build your docker
docker build -t api-gateway .

# run your docker
docker run -p 3000:3000 api-gateway
```


# Kubernetes Deployment and Service

```
apiVersion: apps/v1beta1
kind: Deployment
metadata:
  name: api-gateway
spec:
  replicas: 1
  template:
    metadata:
      labels:
        app: api-gateway
    spec:
      containers:
      - name: api-gateway
        image: narayanprusty/api-gateway
        imagePullPolicy: Always
        ports:
        - containerPort: 3000
        env:
        - name: HELLO_WORLD_SERVICE
          value: http://<<HELLO_WORLD_CLUSTER_IP>>:4000
        - name: GREETER_SERVICE
          value: http://<<GREETER_CLUSTER_IP>>:5000
---
kind: Service
apiVersion: v1
metadata:
  name: api-gateway
spec:
  ports:
    - name: http
      port: 80
      targetPort: 3000
      protocol: TCP
  selector:
      app: api-gateway
  type: LoadBalancer
```