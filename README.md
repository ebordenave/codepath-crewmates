# Web Development Project 7 - *Crewmates*

Submitted by: **Edward S Bordenave**

This web app: **MTG Custom Card Maker**

Time spent: **12** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **A create form allows users to add new cremates**
- [x] **Users can name the crewmate and set the crewmate's attributes by clicking on one of several values**
- [x] **The site displays a summary page of all the user's added crewmates**
- [x] **A previously created crewmate can be updated from the crewmate list**
- [x] **A previously created crewmate can be deleted from the crewmate list**
- [x] **Each crewmate has a direct, unique link to an info page about them**

The following **optional** features are implemented:

- [x] A crewmate can be given a category upon creation which restricts their attributes
- [ ] The site displays summary statistics about a user's crew on their crew page
- [ ] The site displays a custom "success" metric about a user's crew which changes the look of the crewmate list

The following **additional** features are implemented:

* [ ] List anything else that you added to improve the site's functionality!

## Video Walkthrough

Here's a walkthrough of implemented user stories:
https://www.loom.com/share/3387f10b9c754258a6c07a80a5e30389?sid=60e8fed2-c61d-42bb-8358-7cc93dab6128
<img src='https://www.loom.com/share/3387f10b9c754258a6c07a80a5e30389?sid=60e8fed2-c61d-42bb-8358-7cc93dab6128' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with Kap
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

Early on when I started this project, I had (correctly) assumed that fetching data from postgres would be similar to doing it with axios. I figured using a try-catch to handle errors would be best practice. Rather than implementing, I followed a supabase tutorial that completely glossed over this. Towards the end of the project, I was running into errors, 400 and 409 and to try to debug it would take too long for the submission. I spent too much time already trying to debug it but I realize now that I was never catching the errors, console.log would only return [object Object]

Another issue I had wa trying to adapt my idea to project requirements. I think I did it but we'll see.

## License

    Copyright [yyyy] [name of copyright owner]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.