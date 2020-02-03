Who doesn't hate unhandled exceptions in their applications?

In this post, I will show you how to catch unhandled exceptions in a flutter application using a [Catcher](https://pub.dev/packages/catcher) plugin and [sentry.io](http://sentry.io)

## Create a new project in Sentry

Go to sentry.io and create a new project

![Create New Project](https://thepracticaldev.s3.amazonaws.com/i/0e958rup11epvmmsusmv.png)

We can just use the DSN for our application.

![Get DSN](https://thepracticaldev.s3.amazonaws.com/i/kzm8zh1w5sc3l3hwsfge.png)

## Install Catcher

Open your app's `pubspec.yml` file and add `catcher` as a dependency.

```yaml
dependencies:
  catcher: ^0.2.7
```

>NOTE: Catcher version mentioned in this post may not be the latest version.

And in your `main.dart` file,

Import the package,

```dart
import 'package:catcher/catcher_plugin.dart';
```

Replace

```dart
runApp(App());
```

with

```dart
void main() {
  /// checking if release mode or not
  /// no need of Catcher & Sentry in debug mode.
  if (kReleaseMode) {
    Catcher(
      App(),
      releaseConfig: CatcherOptions(
        SilentReportMode(),
        [SentryHandler('<SENTRY_DSN_STRING>')],
      ),
    );
  } else {
    runApp(App());
  }
}
```

Replace your sentry DSN with `<SENTRY_DSN_STRING>` in `SentryHandler`

In `CatcherOptions`, we have to provide a `ReportMode` as the first parameter and at least one `ReportHandler` as the second parameter. Here we are using `SilentReportMode()` as `ReportMode` and `SentryHandler()` as error handler.

What we are expecting here is, if there is any unhandled exception occurs, the app will send the error report to sentry silently. If you want to get user's confirmation to send an error report, you can use `DialogReportMode()` instead of `SilentReportMode()`.

You can refer more in the plugin documentation [here](https://pub.dev/packages/catcher)

next, in `MaterialApp` widget add `Catcher.navigatorKey` as value of `navigatorKey` property

```dart
class App extends StatelessWidget {

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      navigatorKey: Catcher.navigatorKey, // <---------
      home: RootPage(),
    );
  }
}
```

And that's it!

Catcher will catch all the unhandled exceptions in the application from now on. You can view the exceptions in the sentry dashboard.
