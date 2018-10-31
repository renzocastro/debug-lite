# Get Started

Before you run the project, you need check if you have installed some applications and tools. It's much better if you to do that manually by following the steps below.

> **Important:** For development iOS and Android apps you need to use a Mac device.


## Installing Applications and Tools

### IDEs

Check if you have to installed:

- [Xcode](https://itunes.apple.com/us/app/xcode/id497799835?mt=12) (iOS).
- [Android Studio](https://developer.android.com/studio/) (Android).

### NodeJS (v8.x)

For control the node versions for each project we will use NVM and with that install NodeJS.

```console
$ brew install nvm

$ nvm install 8

$ nvm alias default 8

$ nvm use 8
```


### Java Development Kit (JDK)

Check if you have to installed it.

```console
$ javac -version
javac 1.8.0_181
```

If JDK isn't installed please install it.

After check if you have the `JAVA_HOME` variable enviroment setted.

```console
$ echo $JAVA_HOME
/Library/Java/JavaVirtualMachines/jdk1.8.0_181.jdk/Contents/Home
```

If `JAVA_HOME` is empty please set it in `~/.zshrc` file.

```bash
# Java
export JAVA_HOME=$(/usr/libexec/java_home)
```

### Android SDK

Android SDK should be installed when Android Studio was installed. If you don't have Android SDK please download it.

After check if you have the `ANDROID_HOME` variable enviroment setted.

```console
$ echo $ANDROID_HOME
~/Library/Android/sdk
```

If `ANDROID_HOME` is empty please set it and add two paths in `~/.zshrc` file. Here a quick guide: https://stackoverflow.com/a/19986294 .

```bash
# Android SDK
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$ANDROID_HOME/platform-tools:$ANDROID_HOME/tools:$PATH
```

### CocoaPods and xcodeproj (Ruby tools)

Check if you have to installed it.

```console
$ pod --version
1.5.3
```

If CocoaPods isn't installed please install it.

```console
$ sudo gem install cocoapods
```

You also need to configure it.

```console
$ pod setup
```

Now install [xcodeproj](https://github.com/CocoaPods/Xcodeproj).

First check if you have to installed it.

```console
$ xcodeproj --version
1.7.0
```

Else install.

```console
$ [sudo] gem install xcodeproj
```

### Six (Python tool)

> Six is a Python 2 and 3 compatibility library.

```console
$ pip install six
```

## Finally install NativeScript and check all configurations

```console
$ npm install -g nativescript

$ tns doctor

✔ Getting environment information

No issues were detected.
✔ Your ANDROID_HOME environment variable is set and points to correct directory.
✔ Your adb from the Android SDK is correctly installed.
✔ The Android SDK is installed.
✔ A compatible Android SDK for compilation is found.
✔ Javac is installed and is configured properly.
✔ The Java Development Kit (JDK) is installed and is configured properly.
✔ Xcode is installed and is configured properly.
✔ xcodeproj is installed and is configured properly.
✔ CocoaPods are installed.
✔ CocoaPods update is not required.
✔ CocoaPods are configured properly.
✔ Your current CocoaPods version is newer than 1.0.0.
✔ Python installed and configured correctly.
✔ The Python 'six' package is found.
✔ Getting NativeScript components versions information...
✔ Component nativescript has 4.2.4 version and is up to date.
⚠ Update available for component tns-core-modules. Your current version is 4.2.0 and the latest available version is 4.2.1.
✔ Component tns-android has 4.2.0 version and is up to date.
✔ Component tns-ios has 4.2.0 version and is up to date.
```

> The warning `⚠ Update available for component tns-core-modules.` is about the project. This will controlled using some update for the project indicated for the team.


## Configuring the Terminal

### Homebrew

Install [Homebrew](https://brew.sh).

```console
$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

[Homebrew Cask](https://github.com/Homebrew/homebrew-cask) for install applications using Homebrew.

```console
$ brew tap caskroom/cask
```

### iTerm2 (app)

```console
$ brew cask install iterm2
```

Close Terminal app and open iTerm2 app (Found it `Applications` folder).


#### zsh (shell)

Change `bash` to `zsh`.

```console
$ brew install zsh zsh-syntax-highlighting
```

> Now you use `~/ .zshrc` file instead of `~/.bashrc` file.


#### Fonts

```console
$ brew tap caskroom/fonts

$ brew cask install font-hack-nerd-font
```
To use the font by going to:

```
iTerm2 -> Preferences -> Profiles -> Text tab -> Font -> Change Font...
```

Select the font **Hack Regular Nerd Font Complete** and adjust the size to 14. Also check the box for `Use a different font for non-ASCII text` and select the font again. It should be displaying the new font and icons in the prompt.


#### Color scheme

Download [material-design-colors.itermcolors](https://github.com/MartinSeeler/iterm2-material-design) file and import this for iTerm2:

```
iTerm -> Preferences -> Profiles -> Colors tab -> Color Presets -> Import...
```

And select `material-design-colors`.


#### Powerlevel9k (prompt theme for shell)

```console
$ git clone https://github.com/bhilburn/powerlevel9k.git ~/powerlevel9k
```

And in `~/.zshrc` file.
```bash
# Customise the Powerlevel9k prompts
POWERLEVEL9K_LEFT_PROMPT_ELEMENTS=(
  custom_bcp dir vcs newline status
)
POWERLEVEL9K_RIGHT_PROMPT_ELEMENTS=()
POWERLEVEL9K_PROMPT_ADD_NEWLINE=true

# Add the custom Medium M icon prompt segment
# POWERLEVEL9K_CUSTOM_BCP="echo -n $'\uF859'"
POWERLEVEL9K_CUSTOM_BCP="echo -n BCP"
POWERLEVEL9K_CUSTOM_BCP_FOREGROUND="black"
POWERLEVEL9K_CUSTOM_BCP_BACKGROUND="white"

# Load Nerd Fonts with Powerlevel9k theme for Zsh
POWERLEVEL9K_MODE='nerdfont-complete'

source  ~/dev/config/powerlevel9k/powerlevel9k.zsh-theme
```

### git configurations

git config --global core.editor "code --wait"
git config --local user.name "Nombre Apellido"
git config --local user.email "address@dominio.com"


Visual Studio Code config

"terminal.integrated.fontFamily": ""
"terminal.integrated.fontSize": 14