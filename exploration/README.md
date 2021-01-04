The goal of this repo is to give tools to use Solid servers

[Project](https://github.com/scenaristeur/solid-client/projects/1)

# Semapps
https://semapps.org/
- install https://semapps.org/docs/guides/ldp-server
- install option without Docker https://dfaveris.medium.com/installer-semapps-sans-docker-b92f3574f07f

--> Fuseki running on http://localhost:3030

--> Semapps running on http://localhost:3000


Semapps Post
semapps has predefined containers --> see how to create other containers

```
POST /persons HTTP/1.1
Host: localhost:3000
Content-Type: application/json
Accept: */*
Content-Length: 97

{
 "@context": "https://www.w3.org/ns/activitystreams",
  "type": "Person",
  "name": "Guillaume Cousin"
}
```





# Solid community-server
https://rubenverborgh.github.io/Solid-World-September-2020/


running on port 5000 to be able to run semapps (port 3000 & fuseki port 3030) & community-server at the same time
```
git clone https://github.com/solid/community-server.git
cd community-server
npm ci
npm start -- -p 5000
```
or for persistent
```
npm start -- -p 5000 -c config/config-file.json  # for persistant file
npm start -- -p 5000 -c config/config-path-routing.json # Configure routing to send all requests containing /file/ to the file store, containing /memory/ to the memory store and /sparql/ to the sparql endpoint store
npm start -- -p 5000 -c config/config-rdf-to-sparql-endpoint.json # Sends all data that can be interpreted as RDF to the sparql endpoint store and all other data to the default store (file in this case).
```
Be carefull to eventually update .acl file
```
acl:accessTo    <http://localhost:5000/>;
acl:default     <http://localhost:5000/>.
```




--> community-server running on http://localhost:5000

Server expose its own data.. could be cool for updating server on the fly ? otherwise if must set a rootfilepath ?  https://github.com/solid/community-server/issues/444#issuecomment-751502319

So with file-config.json on port 5000 and data/ as rootfilepath could be
```
npm start -- -p 5000 -c config/config-file.json -f data
```


- demos https://github.com/solid/community-server-demos


- start options in package.json
```
"start": "node ./bin/server.js -p 3000 -c config/config-file.json",
  "start:memory": "node ./bin/server.js -p 3000",
  "start:routing": "node ./bin/server.js -p 3000 -c config/config-path-routing.json",
```

# Three.js D3 directed graph
https://vasturiano.github.io/3d-force-graph/example/large-graph/
 / https://github.com/vasturiano/3d-force-graph

https://bl.ocks.org/vasturiano/f59675656258d3f490e9faa40828c0e7
/ https://github.com/vasturiano/d3-force-3d

https://bl.ocks.org/vasturiano/02affe306ce445e423f992faeea13521

https://bl.ocks.org/micahstubbs/a9eb7847c56c4c844d36cfbc5075be73

https://www.npmjs.com/package/3d-force-graph

# babylon
https://forum.babylonjs.com/t/directed-graphs/9590

#P5
http://haptic-data.com/toxiclibsjs/examples/force-directed-graph-p5

https://editor.p5js.org/horizonqu/sketches/SyCLXgace
