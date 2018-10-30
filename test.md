# Get Started

Before that you run the project, first you need check if you have installed some applications and tools.


## Applications

IDEs for iOS and Android

```bash
# » iOS
Xcode

# » Android
Android Studio 
```


## Tools

### JDK

Check if you have to installed JDK (Java).

```shell
$ javac -version
javac 1.8.0_181
```

echo $JAVA_HOME

```bash
# » Android

# Java (JDK)
export JAVA_HOME=$(/usr/libexec/java_home)
```

### Android SDK

Android SDK (se instala junto a Android Studio)

```bash
Configurar en el ANDROID_HOME como variable de entorno
Agregar exportPATH $ANDROID_HOME/platform-tools:$ANDROID_HOME/tools:$PATH
```





# Android SDK
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$ANDROID_HOME/platform-tools:$ANDROID_HOME/tools:$PATH


```shell
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

The warning `⚠ Update available for component tns-core-modules.` is about the project. This will controlled using some update way indicated for the team.
