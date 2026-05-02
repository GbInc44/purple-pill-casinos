I checked the current workflow and dependency files. The red error shown in the screenshot is the overall job failure; the Node.js 20 message is a warning, not necessarily the thing that caused `exit code 1`.

The likely real failure is in the install step: this project has Bun lockfiles (`bun.lock`, `bun.lockb`) and also a `package-lock.json`, but `package-lock.json` is out of sync with `package.json` (it is missing several dev dependencies such as Vitest/Testing Library/Playwright-related packages). The workflow currently runs `npm ci`, which can fail when the npm lockfile is not aligned.

Plan:

1. Update `.github/workflows/deploy.yml` to use Bun for installation/build instead of npm:
   - Keep GitHub Pages permissions and deployment steps.
   - Add `oven-sh/setup-bun@v2`.
   - Run `bun install --frozen-lockfile`.
   - Run `bun run build`.

2. Keep/adjust deployment compatibility settings:
   - Keep `FORCE_JAVASCRIPT_ACTIONS_TO_NODE24: "true"` to address the GitHub Actions Node 20 deprecation warning.
   - Remove unnecessary `actions/setup-node` usage if Bun handles the build, reducing one Node-based action warning source.

3. Improve diagnostics in the workflow:
   - Print Bun version.
   - Verify `dist/index.html` and `dist/assets` exist after build.
   - Keep copying `CNAME` into `dist/`.
   - Keep generating `dist/404.html` from the built `index.html` for GitHub Pages SPA fallback.

4. Optional cleanup after the workflow is stable:
   - Consider removing or regenerating `package-lock.json` later to avoid confusion between npm and Bun lockfiles. I will not remove it unless needed for the workflow fix.

After approval, I’ll edit only the workflow file and leave the app code unchanged.