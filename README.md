# sort dom on the fly
It sorts your existing dom by a given dom selector

```

<ul class="search-results">
    <li>
        <div class="package-details">
            <h3>
                <a class="name" href="/package/stream">stream</a>
                &nbsp;&nbsp;<a class="author" href="/~juliangruber">juliangruber</a>
            </h3>


            <p class="description">Node.js streams in the browser</p>

            <p class="stats">
                <span class="stars"><i class="icon-star"></i>0</span>
                &nbsp;&nbsp;<span class="version">v0.0.2</span>

            </p>

            <p class="keywords">
                <i class="icon-tag"></i>
                stream
            </p>

        </div>
    </li>
    <li>
    ....
</ul>

```

```js
domSort('.search-results li', ['.stars']);
```
