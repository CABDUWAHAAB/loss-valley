# Simulated usability checks

## Jason — standard learning rate

- Profile: a student who is new to gradient descent.
- Route: open the live page, keep the learning rate at `0.18`, take one step and open **What is loss?**.
- Start: step `0`, weight `−2.60`, loss `8.610`.
- Result: step `1`, weight `−1.56`, loss `3.645`.
- Feedback shown: **Nice progress! The step moved the weight toward a lower loss.**
- The loss explanation opened correctly.
- No broken control or page error was found in this route.
- Change made: no interface change was needed.

## Emirozkan — very large learning rate

- Profile: a student testing an extreme value.
- Route: set the learning rate to `1.10`, take one step and open **What does the learning rate do?**.
- Start: step `0`, weight `−2.60`, loss `8.610`.
- Result: step `1`, weight `3.78`, loss `12.310`.
- Feedback shown: **That jump was too large. The marker crossed the valley and the loss went up.**
- The learning-rate explanation opened correctly.
- **Run** completed three steps and paused correctly. **Reset** returned the model to step `0`, weight `−2.60` and loss `8.610`.
- Keyboard control changed the slider value correctly.
- Change made: no interface change was needed.

## Result

Both scenarios produced the intended teaching result. A useful learning rate lowered the loss, while a very large learning rate crossed the valley and raised the loss. The checks found no application error. The source and deployment documentation were updated after the checks.

## Checks completed

- [x] Page opens without installation
- [x] Slider changes the shown learning rate
- [x] **Take one step** changes weight and loss
- [x] **Run** starts and pauses repeated steps
- [x] **Reset** returns the model to the start
- [x] Useful learning rate lowers loss
- [x] Very large learning rate overshoots and raises loss
- [x] FAQ answers open correctly
- [x] Live production page loads without browser errors

