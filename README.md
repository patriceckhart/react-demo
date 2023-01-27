# Neos Flow package with react view

## Installation

Pull the React.Demo Flow package into ```./DistributionPackages``` folder.

Run
```
composer update
```
After installation run
```
flow flow:cache:flush --force
```
and
```
flow flow:package:rescan
```

## React app

Open ```./Private/Resources/react-demo``` in cli and run
```
yarn
```

After all packages have been installed run
```
yarn watch
```

## Fusion
In the Fusion template, the csrf token exists in the DOM as a data attribute and the configuration defined in the settings here, for example, a navigation.

## Author

* E-Mail: mail@patriceckhart.com
* URL: http://www.patriceckhart.com
