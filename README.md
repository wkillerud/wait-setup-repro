# wait-setup-repro

Minimal repro for a regression in testing-library/user-event

## Steps

- npm install
- npm test

Jest fails because of a timeout.

- Comment out the call to `userEvent.click()` and see the tests run.
- Uncomment `userEvent.click()`
- Comment out the fake timer and see the test run.

Test passes.

- Uncomment so the fake timer becomes active again
- Comment out the call to `wait()` in setup in node_modules:

```patch
diff --git a/node_modules/@testing-library/user-event/dist/index.cjs b/node_modules/@testing-library/user-event/dist/index.cjs
index f69faf8..a50cb3d 100644
--- a/node_modules/@testing-library/user-event/dist/index.cjs
+++ b/node_modules/@testing-library/user-event/dist/index.cjs
@ -2898,7 +2898,7 @@ function wrapAndBindImpl(instance, impl) {
   function method(...args) {
     setLevelRef(instance[Config], 1 /* Call */);
     return wrapAsync(() => impl.apply(instance, args).then(async (ret) => {
-      await wait(instance[Config]);
+      //await wait(instance[Config]);
       return ret;
     }));
   }
```

Test passes.
