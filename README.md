# multiple-react-nginx

Completely containerized multiple SPAs created by CRA with client-side routing accessible through an nginx gateway under different paths as explained in detail [here](https://akullpp.com/multiple-spa-containers).

## Run

```
cd vm
docker-compose up
```

The `foo` SPA will be available at [http://localhost:8080/foo](http://localhost:8080/foo)

The `bar` SPA will be available at [http://localhost:8080/bar](http://localhost:8080/bar)
