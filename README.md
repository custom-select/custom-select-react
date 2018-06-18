# custom-select-react
It's the React version of the [custom-select](https://github.com/custom-select/custom-select) library, not a simple wrapper but newly rewritten for the purpose.
## Why another React select library
There are many well built [React select libraries](https://github.com/brillout/awesome-react-components#select) in the wild. They all work great but with many of our projects we had a **requirement** no one was able to support: with medium and small touch devices (phones and pads) **the native HTML select UI has to be shown instead of a custom one**. That's because the users are familiar with that UI and find it more easy to fill the forms.

Based on this requirement we have built a component deigned to have both a native HTML select and a custom one constantly linked together and with the same features, so you're abel show one or the other depending on the current scenario (device type, screen size, context, etc). 

The component is totally style agnostic, which means it's easy to style in every environment you're using (pure CSS, SASS, CSSinJS libraries).
