# togetherjs-minified-test
Trying to minify togetherjs so it needs only one js file


# Add to everypage

```javascript
<!-- TogetherJS Collaboration -->
<!-- example : URL should end in      www.domain.com/index.html#&togetherjs=my_session   -->
<script> /* 200331 -added by jon custom togetherjs hub*/
TogetherJSConfig_hubBase = "https://togetherjs-jj.glitch.me";
TogetherJSConfig_suppressJoinConfirmation=true;
</script>
<script src="https://togetherjs.com/togetherjs-min.js"></script>
```