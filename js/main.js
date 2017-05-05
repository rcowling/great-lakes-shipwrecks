L.mapbox.accessToken = 'pk.eyJ1IjoicmNvd2xpbmciLCJhIjoiY2oxaTUzOXQwMDBwbTJxcGRpcGd2M21ncyJ9.Ix-7OpMI3MNSvDxcpCi8hw';


var map = L.mapbox.map('map').setView([45.2858536, -83.8419731], 6)   
        //add great lakes bathymetry from ESRI basemap
        L.esri.basemapLayer("Oceans").addTo(map);
        L.esri.basemapLayer("OceansLabels").addTo(map);

// create a feature layer and load the shipwreck geojson data
var wreckLayer = L.mapbox.featureLayer().addTo(map);

var shipwrecks = [{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "Name": "Bermuda",
        "Year": "1870",
        "Type": "Schooner",
        "Type_of_Loss": "Storm",
        "Lake": "Lake Superior"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -86.64683333,
          46.46483333
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "George",
        "Year": "1893",
        "Type": "Schooner",
        "Type_of_Loss": "Storm",
        "Lake": "Lake Superior"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -86.52083333,
          46.516
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Herman H. Hettler",
        "Year": "1926",
        "Type": "Propeller",
        "Type_of_Loss": "Storm",
        "Lake": "Lake Superior"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -86.59966667,
          46.48383333
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Kiowa",
        "Year": "1929",
        "Type": "Propeller",
        "Type_of_Loss": "Storm",
        "Lake": "Lake Superior"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -86.22016667,
          46.64516667
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Manhattan",
        "Year": "1903",
        "Type": "Propeller",
        "Type_of_Loss": "Storm",
        "Lake": "Lake Superior"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -86.60933333,
          46.467
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Smith Moore",
        "Year": "1880",
        "Type": "Steamer",
        "Type_of_Loss": "Collision",
        "Lake": "Lake Superior"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -86.61766667,
          46.4555
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Steven M. Selvick",
        "Year": "1996",
        "Type": "Tug",
        "Type_of_Loss": "Intentional",
        "Lake": "Lake Superior"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -86.59783333,
          46.49216667
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Superior 5",
        "Year": "1856",
        "Type": "Sidewheeler",
        "Type_of_Loss": "Collision",
        "Lake": "Lake Superior"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -86.41516667,
          46.5575
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Agnes W.",
        "Year": "1918",
        "Type": "Steamer",
        "Type_of_Loss": "Storm",
        "Lake": "Lake Huron"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -83.71431667,
          45.92901667
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Alice C.",
        "Year": 0,
        "Type": "Tug",
        "Type_of_Loss": "Intentional",
        "Lake": "Lake Huron"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -83.89931667,
          45.99963333
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Delaware",
        "Year": "1836",
        "Type": "Steamer",
        "Type_of_Loss": "Storm",
        "Lake": "Lake Huron"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -83.825,
          45.99866667
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "E.J. LaWay",
        "Year": "1929",
        "Type": "Steamer",
        "Type_of_Loss": "Leak",
        "Lake": "Lake Huron"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -83.7451,
          46.10523333
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "General",
        "Year": "1930",
        "Type": "Tug",
        "Type_of_Loss": "Collision",
        "Lake": "Lake Huron"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -83.8972,
          45.9872
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "George H. Ely",
        "Year": "1882",
        "Type": "Schooner",
        "Type_of_Loss": "Collision",
        "Lake": "Lake Huron"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -83.90555,
          45.9597
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "J. C. Ford",
        "Year": "1924",
        "Type": "Steamer",
        "Type_of_Loss": "Fire",
        "Lake": "Lake Huron"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -83.838,
          46.0444
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "John B. Merrill",
        "Year": "1893",
        "Type": "Schooner",
        "Type_of_Loss": "Collision",
        "Lake": "Lake Huron"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -83.73515,
          45.9872
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "John W. Cullen",
        "Year": "1930",
        "Type": "Steamer",
        "Type_of_Loss": "Unknown",
        "Lake": "Lake Huron"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -83.89653333,
          45.98918333
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Monarch",
        "Year": "1874",
        "Type": "Barque",
        "Type_of_Loss": "Collision",
        "Lake": "Lake Huron"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -83.88336667,
          45.96088333
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Mystery Barge",
        "Year": "1927",
        "Type": "Tug",
        "Type_of_Loss": "Unknown",
        "Lake": "Lake Huron"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -83.82416667,
          46.11638333
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Rome",
        "Year": "1909",
        "Type": "Steamer",
        "Type_of_Loss": "Fire",
        "Lake": "Lake Huron"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -84.01271667,
          46.08686667
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Sainte Marie",
        "Year": "1928",
        "Type": "Barge",
        "Type_of_Loss": "Intentional",
        "Lake": "Lake Huron"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -83.89653333,
          45.98918333
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Silver Spray",
        "Year": "1914",
        "Type": "Tug",
        "Type_of_Loss": "Intentional",
        "Lake": "Lake Huron"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -83.63203333,
          45.94871667
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Superior",
        "Year": "1929",
        "Type": "Steamer",
        "Type_of_Loss": "Fire",
        "Lake": "Lake Huron"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -83.89851667,
          45.99498333
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Troy",
        "Year": "1920",
        "Type": "Schooner",
        "Type_of_Loss": "Fire",
        "Lake": "Lake Huron"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -83.625,
          45.95065
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Two Myrtles",
        "Year": 0,
        "Type": "Steamer",
        "Type_of_Loss": "Intentional",
        "Lake": "Lake Huron"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -83.89893333,
          45.99925
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "A.J. Rogers",
        "Year": "1898",
        "Type": "Schooner",
        "Type_of_Loss": "Leak",
        "Lake": "Lake Michigan"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -85.48026667,
          45.05275
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Elmwood",
        "Year": 0,
        "Type": "Tug",
        "Type_of_Loss": "Intentional",
        "Lake": "Lake Michigan"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -85.63505,
          44.78748333
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Metropolis (Bow)",
        "Year": "1886",
        "Type": "Schooner",
        "Type_of_Loss": "Collision",
        "Lake": "Lake Michigan"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -85.46575,
          44.97045
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Metropolis (Stern)",
        "Year": "1886",
        "Type": "Schooner",
        "Type_of_Loss": "Collision",
        "Lake": "Lake Michigan"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -85.46386667,
          44.97231667
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Nyord",
        "Year": "1970",
        "Type": "Tug",
        "Type_of_Loss": "Intentional",
        "Lake": "Lake Michigan"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -85.60006667,
          44.77333333
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Tramp",
        "Year": "1970",
        "Type": "Tug",
        "Type_of_Loss": "Intentional",
        "Lake": "Lake Michigan"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -85.6012,
          44.85041667
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Shale Scow",
        "Year": "1903",
        "Type": "Scow",
        "Type_of_Loss": "Intentional",
        "Lake": "Lake Michigan"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -85.42796667,
          44.89303333
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Yuba Wreck",
        "Year": "1894",
        "Type": "Schooner",
        "Type_of_Loss": "Unknown",
        "Lake": "Lake Michigan"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -85.46613333,
          44.82693333
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Algoma",
        "Year": "1885",
        "Type": "Steamer",
        "Type_of_Loss": "Storm",
        "Lake": "Lake Superior"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -88.53891667,
          48.10718333
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "America",
        "Year": "1928",
        "Type": "Freighter",
        "Type_of_Loss": "Collision",
        "Lake": "Lake Superior"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -89.22241667,
          47.8938
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Chester A. Congdon (Bow)",
        "Year": "1918",
        "Type": "Freighter",
        "Type_of_Loss": "Storm",
        "Lake": "Lake Superior"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -88.51358333,
          48.19265
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Chester A. Congdon (Stern)",
        "Year": "1918",
        "Type": "Freighter",
        "Type_of_Loss": "Storm",
        "Lake": "Lake Superior"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -88.51468333,
          48.19366667
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Chisholm (Engine)",
        "Year": "1898",
        "Type": "Freighter",
        "Type_of_Loss": "Storm",
        "Lake": "Lake Superior"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -89.32993333,
          47.8575
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Chisholm (Hull)",
        "Year": "1898",
        "Type": "Freighter",
        "Type_of_Loss": "Storm",
        "Lake": "Lake Superior"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -89.32798333,
          47.85765
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "George M. Cox",
        "Year": "1933",
        "Type": "Steamer",
        "Type_of_Loss": "Collision",
        "Lake": "Lake Superior"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -89.32308333,
          47.8577
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Cumberland",
        "Year": "1877",
        "Type": "Steamer",
        "Type_of_Loss": "Leak",
        "Lake": "Lake Superior"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -89.3275,
          47.85775
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Emperor (Stern)",
        "Year": "1947",
        "Type": "Freighter",
        "Type_of_Loss": "Collision",
        "Lake": "Lake Superior"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -88.49343333,
          48.2003
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Emperor (Bow)",
        "Year": "1947",
        "Type": "Freighter",
        "Type_of_Loss": "Collision",
        "Lake": "Lake Superior"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -88.49208333,
          48.20005
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Glenlyon",
        "Year": "1924",
        "Type": "Freighter",
        "Type_of_Loss": "Collision",
        "Lake": "Lake Superior"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -88.74706667,
          47.95296667
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Kamloops (Stern)",
        "Year": "1927",
        "Type": "Freighter",
        "Type_of_Loss": "Unknown",
        "Lake": "Lake Superior"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -88.76666667,
          48.0853
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Kamloops (Bow)",
        "Year": "1927",
        "Type": "Freighter",
        "Type_of_Loss": "Unknown",
        "Lake": "Lake Superior"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -88.76718333,
          48.08535
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Monarch",
        "Year": "1906",
        "Type": "Freighter",
        "Type_of_Loss": "Collision",
        "Lake": "Lake Superior"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -88.43261667,
          48.1889
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Tug in Five Finger Bay",
        "Year": 0,
        "Type": "Tug",
        "Type_of_Loss": "Unknown",
        "Lake": "Lake Superior"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -88.52171667,
          48.15541667
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "John Jacob Astor",
        "Year": "1844",
        "Type": "Brig",
        "Type_of_Loss": "Collision",
        "Lake": "Lake Superior"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -87.86466667,
          47.47233333
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "City of St. Joseph",
        "Year": "1942",
        "Type": "Barge",
        "Type_of_Loss": "Collision",
        "Lake": "Lake Superior"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -88.1125,
          47.47
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "City of Superior",
        "Year": "1857",
        "Type": "Freighter",
        "Type_of_Loss": "Collision",
        "Lake": "Lake Superior"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -87.85666667,
          47.47166667
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "John L. Gross",
        "Year": "1873",
        "Type": "Schooner",
        "Type_of_Loss": "Collision",
        "Lake": "Lake Superior"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -88.15516667,
          47.45983333
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Langham",
        "Year": "1910",
        "Type": "Steamer",
        "Type_of_Loss": "Fire",
        "Lake": "Lake Superior"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -87.9255,
          47.37283333
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Maplehurst",
        "Year": "1922",
        "Type": "Steamer",
        "Type_of_Loss": "Storm",
        "Lake": "Lake Superior"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -88.63416667,
          47.23183333
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "USCGC Mesquite",
        "Year": "1989",
        "Type": "Mesquite",
        "Type_of_Loss": "Intentional",
        "Lake": "Lake Superior"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -87.74216667,
          47.39066667
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "William C. Moreland",
        "Year": "1910",
        "Type": "Steamer",
        "Type_of_Loss": "Collision",
        "Lake": "Lake Superior"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -88.32666667,
          47.41783333
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "James Pickands",
        "Year": "1894",
        "Type": "Steamer",
        "Type_of_Loss": "Collision",
        "Lake": "Lake Superior"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -88.29883333,
          47.4285
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Tioga",
        "Year": "1919",
        "Type": "Freighter",
        "Type_of_Loss": "Storm",
        "Lake": "Lake Superior"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -88.27033333,
          47.43766667
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Transport",
        "Year": "1942",
        "Type": "Barge",
        "Type_of_Loss": "Collision",
        "Lake": "Lake Superior"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -88.1125,
          47.47
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Wasaga",
        "Year": "1910",
        "Type": "Steamer",
        "Type_of_Loss": "Fire",
        "Lake": "Lake Superior"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -87.88583333,
          47.4695
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Alva Bradley",
        "Year": "1894",
        "Type": "Schooner",
        "Type_of_Loss": "Storm",
        "Lake": "Lake Michigan"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -85.98766667,
          45.03783333
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Congress",
        "Year": "1904",
        "Type": "Steamer",
        "Type_of_Loss": "Fire",
        "Lake": "Lake Michigan"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -86.09083333,
          45.02483333
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Flying Cloud",
        "Year": "1892",
        "Type": "Schooner",
        "Type_of_Loss": "Collision",
        "Lake": "Lake Michigan"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -86.9565,
          44.9365
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Walter L. Frost",
        "Year": "1903",
        "Type": "Steamer",
        "Type_of_Loss": "Collision",
        "Lake": "Lake Michigan"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -86.14483333,
          44.99433333
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "James McBride",
        "Year": "1857",
        "Type": "Brig",
        "Type_of_Loss": "Storm",
        "Lake": "Lake Michigan"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -86.07583333,
          44.89483333
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Montauk",
        "Year": "1882",
        "Type": "Schooner",
        "Type_of_Loss": "Collision",
        "Lake": "Lake Michigan"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -85.99183333,
          45.159
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "H. D. Moore",
        "Year": "1907",
        "Type": "Schooner",
        "Type_of_Loss": "Collision",
        "Lake": "Lake Michigan"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -86.074,
          45.03366667
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Francisco Morazan",
        "Year": "1960",
        "Type": "Freighter",
        "Type_of_Loss": "Storm",
        "Lake": "Lake Michigan"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -86.13483333,
          44.9845
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Rising Sun",
        "Year": "1917",
        "Type": "Steamer",
        "Type_of_Loss": "Collision",
        "Lake": "Lake Michigan"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -85.93283333,
          44.9705
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Three Brothers",
        "Year": "1911",
        "Type": "Steamer",
        "Type_of_Loss": "Collision",
        "Lake": "Lake Michigan"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -86.093,
          45.009
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Arctic",
        "Year": "1860",
        "Type": "Steamer",
        "Type_of_Loss": "Collision",
        "Lake": "Lake Superior"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -87.9975,
          46.96233333
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "DeSoto",
        "Year": "1869",
        "Type": "Schooner",
        "Type_of_Loss": "Collision",
        "Lake": "Lake Superior"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -87.3925,
          46.5345
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Florida",
        "Year": "1886",
        "Type": "Schooner",
        "Type_of_Loss": "Storm",
        "Lake": "Lake Superior"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -87.39216667,
          46.53516667
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Charles J. Kershaw",
        "Year": "1895",
        "Type": "Steamer",
        "Type_of_Loss": "Storm",
        "Lake": "Lake Superior"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -87.3635,
          46.50933333
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "D. Leuty",
        "Year": "1911",
        "Type": "Steamer",
        "Type_of_Loss": "Collision",
        "Lake": "Lake Superior"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -87.374,
          46.546
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "George Nestor",
        "Year": "1909",
        "Type": "Schooner",
        "Type_of_Loss": "Storm",
        "Lake": "Lake Superior"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -88.00333333,
          46.9665
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Queen City",
        "Year": "1864",
        "Type": "Schooner",
        "Type_of_Loss": "Collision",
        "Lake": "Lake Superior"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -87.31066667,
          46.49033333
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "George Sherman",
        "Year": "1887",
        "Type": "Schooner",
        "Type_of_Loss": "Storm",
        "Lake": "Lake Superior"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -87.1605,
          46.49816667
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Southwest",
        "Year": "1898",
        "Type": "Sail Boat",
        "Type_of_Loss": "Collision",
        "Lake": "Lake Superior"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -87.93516667,
          46.94033333
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Charles A. Street",
        "Year": "1908",
        "Type": "Barge",
        "Type_of_Loss": "Fire",
        "Lake": "Lake Huron"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.45833333,
          43.59166667
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Charles S. Price",
        "Year": "1913",
        "Type": "Freighter",
        "Type_of_Loss": "Storm",
        "Lake": "Lake Huron"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.3529,
          43.1529
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Checotah",
        "Year": "1906",
        "Type": "Schooner",
        "Type_of_Loss": "Collision",
        "Lake": "Lake Huron"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.4695,
          43.60178333
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "City of Genoa",
        "Year": "1911",
        "Type": "Propeller",
        "Type_of_Loss": "Collision",
        "Lake": "Lake Huron"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.37183333,
          43.14633333
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Col. A.B. Williams",
        "Year": "1864",
        "Type": "Schooner",
        "Type_of_Loss": "Collision",
        "Lake": "Lake Huron"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.51341667,
          43.60391667
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Eliza H. Strong",
        "Year": "1904",
        "Type": "Steamer",
        "Type_of_Loss": "Fire",
        "Lake": "Lake Huron"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.50968333,
          43.26181667
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "F.B. Gardner",
        "Year": "1904",
        "Type": "Steamer",
        "Type_of_Loss": "Collision",
        "Lake": "Lake Huron"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.5295,
          43.52716667
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "John Breeden",
        "Year": "1899",
        "Type": "Schooner",
        "Type_of_Loss": "Storm",
        "Lake": "Lake Huron"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.43733333,
          43.21066667
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Mary Alice B.",
        "Year": "1975",
        "Type": "Tug",
        "Type_of_Loss": "Collision",
        "Lake": "Lake Huron"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.43835,
          43.37181667
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Canisteo",
        "Year": "1920",
        "Type": "Barge",
        "Type_of_Loss": "Collision",
        "Lake": "Lake Huron"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.30486667,
          43.2357
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "New York",
        "Year": "1876",
        "Type": "Steamer",
        "Type_of_Loss": "Storm",
        "Lake": "Lake Huron"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.4712,
          43.60383333
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "North Star",
        "Year": "1908",
        "Type": "Freighter",
        "Type_of_Loss": "Collision",
        "Lake": "Lake Huron"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.44206667,
          43.39923333
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Queen City",
        "Year": "1863",
        "Type": "Steamer",
        "Type_of_Loss": "Collision",
        "Lake": "Lake Huron"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.42851667,
          43.15206667
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Regina",
        "Year": "1913",
        "Type": "Freighter",
        "Type_of_Loss": "Storm",
        "Lake": "Lake Huron"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.44645,
          43.34056667
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Sport",
        "Year": "1920",
        "Type": "Tug",
        "Type_of_Loss": "Storm",
        "Lake": "Lake Huron"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.46486667,
          43.2668
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Sweetheart",
        "Year": "1880",
        "Type": "Schooner",
        "Type_of_Loss": " Collision",
        "Lake": "Lake Huron"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.38583333,
          43.04083333
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Rockaway",
        "Year": "1891",
        "Type": "Schooner",
        "Type_of_Loss": "Storm",
        "Lake": "Lake Michigan"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -86.30671667,
          42.44226667
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Havana",
        "Year": "1887",
        "Type": "Schooner",
        "Type_of_Loss": "Storm",
        "Lake": "Lake Michigan"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -86.42718333,
          42.19483333
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Verano",
        "Year": "1946",
        "Type": "Yacht",
        "Type_of_Loss": "Storm",
        "Lake": "Lake Michigan"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -86.26386667,
          42.50686667
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Francie",
        "Year": "1980",
        "Type": "Sail Boat",
        "Type_of_Loss": "Leak",
        "Lake": "Lake Michigan"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -86.2822,
          42.68916667
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Potter�s Barge",
        "Year": 0,
        "Type": "Unknown",
        "Type_of_Loss": "Unknown",
        "Lake": "Lake Michigan"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -86.37015,
          42.89425
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Fireboat",
        "Year": 0,
        "Type": "Steamer",
        "Type_of_Loss": "Intentional",
        "Lake": "Lake Michigan"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -86.264,
          42.63573333
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Ann Arbor No. 5",
        "Year": "1969",
        "Type": "Ferry",
        "Type_of_Loss": "Intentional",
        "Lake": "Lake Michigan"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -86.45711667,
          42.37933333
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "North Shore tug",
        "Year": "1980",
        "Type": "Tug",
        "Type_of_Loss": "Intentional",
        "Lake": "Lake Michigan"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -86.32585,
          42.66921667
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "H.C. Akeley",
        "Year": "1883",
        "Type": "Steamer",
        "Type_of_Loss": "Storm",
        "Lake": "Lake Michigan"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -86.52728333,
          42.65873333
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Cayuga",
        "Year": "1895",
        "Type": "Freighter",
        "Type_of_Loss": "Collision",
        "Lake": "Lake Michigan"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -85.19001667,
          45.72065
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Cedarville (bow)",
        "Year": "1965",
        "Type": "Freighter",
        "Type_of_Loss": "Collision",
        "Lake": "Lake Huron"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -84.6708,
          45.78728333
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Cedarville (stern)",
        "Year": "1965",
        "Type": "Freighter",
        "Type_of_Loss": "Collision",
        "Lake": "Lake Huron"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -84.67191667,
          45.7892
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Colonel Ellsworth",
        "Year": "1896",
        "Type": "Schooner",
        "Type_of_Loss": "Collision",
        "Lake": "Lake Michigan"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -85.01815,
          45.81233333
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Eber Ward (bow)",
        "Year": "1909",
        "Type": "Freighter",
        "Type_of_Loss": "Leak",
        "Lake": "Lake Michigan"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -84.6708,
          45.8125
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Eber Ward (engine)",
        "Year": "1909",
        "Type": "Freighter",
        "Type_of_Loss": "Leak",
        "Lake": "Lake Michigan"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -84.81938333,
          45.8125
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Fred McBrier",
        "Year": "1890",
        "Type": "Steamer",
        "Type_of_Loss": "Collision",
        "Lake": "Lake Michigan"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -84.92193333,
          45.80571667
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Maitland",
        "Year": "1871",
        "Type": "Schooner",
        "Type_of_Loss": "Collision",
        "Lake": "Lake Michigan"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -84.68408333,
          45.80423333
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Martin Stalker",
        "Year": "1886",
        "Type": "Schooner",
        "Type_of_Loss": "Collision",
        "Lake": "Lake Huron"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -84.68408333,
          45.79381667
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Minneapolis",
        "Year": "1894",
        "Type": "Steamer",
        "Type_of_Loss": "Leak",
        "Lake": "Lake Huron"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -84.73168333,
          45.80831667
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Northwest (bow)",
        "Year": "1898",
        "Type": "Schooner",
        "Type_of_Loss": "Leak",
        "Lake": "Lake Michigan"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -84.8586,
          45.7906
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Northwest (stern)",
        "Year": "1898",
        "Type": "Schooner",
        "Type_of_Loss": "Leak",
        "Lake": "Lake Michigan"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -84.8577,
          45.79081667
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "St. Andrew",
        "Year": "1878",
        "Type": "Schooner",
        "Type_of_Loss": "Collision",
        "Lake": "Lake Huron"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -84.53018333,
          45.70083333
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Sandusky",
        "Year": "1856",
        "Type": "Brig",
        "Type_of_Loss": "Storm",
        "Lake": "Lake Michigan"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -84.83758333,
          45.79948333
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "William H. Barnum",
        "Year": "1894",
        "Type": "Steamer",
        "Type_of_Loss": "Leak",
        "Lake": "Lake Huron"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -84.63096667,
          45.74525
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "William Young",
        "Year": "1891",
        "Type": "Schooner",
        "Type_of_Loss": "Collision",
        "Lake": "Lake Huron"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -84.69903333,
          45.81276667
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Albany",
        "Year": "1893",
        "Type": "Steamer",
        "Type_of_Loss": "Storm",
        "Lake": "Lake Huron"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.70026667,
          44.10585
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Arctic",
        "Year": "1893",
        "Type": "Steamer",
        "Type_of_Loss": "Collision",
        "Lake": "Lake Huron"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.47853333,
          43.69103333
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Dump Barge",
        "Year": "1880",
        "Type": "Barge",
        "Type_of_Loss": "Unknown",
        "Lake": "Lake Huron"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.8546,
          44.12335
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Dunderburg",
        "Year": "1868",
        "Type": "Steamer",
        "Type_of_Loss": "Collision",
        "Lake": "Lake Huron"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.55651667,
          43.92735
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Goliath",
        "Year": "1848",
        "Type": "Freighter",
        "Type_of_Loss": "Fire",
        "Lake": "Lake Huron"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.54535,
          43.78346667
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "John McGean",
        "Year": "1913",
        "Type": "Freighter ",
        "Type_of_Loss": "Storm",
        "Lake": "Lake Huron"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.52861667,
          43.95326667
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Daniel J. Morrell stern",
        "Year": "1966",
        "Type": "Freighter",
        "Type_of_Loss": "Storm",
        "Lake": "Lake Huron"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.8348,
          44.25796667
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Daniel J. Morrell bow",
        "Year": "1966",
        "Type": "Freighter",
        "Type_of_Loss": "Storm",
        "Lake": "Lake Huron"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.75268333,
          44.30533333
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Philadelphia",
        "Year": "1893",
        "Type": "Steamer",
        "Type_of_Loss": "Collision",
        "Lake": "Lake Huron"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.71653333,
          44.06866667
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Gov. Smith",
        "Year": "1906",
        "Type": "Steamer",
        "Type_of_Loss": "Collision",
        "Lake": "Lake Huron"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.70001667,
          44.15555
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Troy",
        "Year": "1859",
        "Type": "Steamer",
        "Type_of_Loss": "Storm",
        "Lake": "Lake Huron"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -83.03231667,
          44.14425
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "E.B. Allen",
        "Year": "1871",
        "Type": "Schooner",
        "Type_of_Loss": "Collision",
        "Lake": "Lake Huron"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -83.16471667,
          45.01638333
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "John J. Audubon",
        "Year": "1854",
        "Type": "Schooner",
        "Type_of_Loss": "Collision",
        "Lake": "Lake Huron"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -83.03795,
          44.9916
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Bay City",
        "Year": "1902",
        "Type": "Schooner",
        "Type_of_Loss": "Collision",
        "Lake": "Lake Huron"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -83.42751667,
          45.05555
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Bissel",
        "Year": "1905",
        "Type": "Schooner",
        "Type_of_Loss": "Collision",
        "Lake": "Lake Huron"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -83.42675,
          45.05615
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Shamrock",
        "Year": "1905",
        "Type": "Barge",
        "Type_of_Loss": "Unknown",
        "Lake": "Lake Huron"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -83.43405,
          45.05128333
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Brightie",
        "Year": "1928",
        "Type": "Schooner",
        "Type_of_Loss": "Unknown",
        "Lake": "Lake Michigan"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -86.49816667,
          43.49816667
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Commanche",
        "Year": 0,
        "Type": "Tug",
        "Type_of_Loss": "Unknown",
        "Lake": "Lake Michigan"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -86.48366667,
          43.8375
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Interlaken",
        "Year": "1903",
        "Type": "Unknown",
        "Type_of_Loss": "Storm",
        "Lake": "Lake Michigan"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -86.45816667,
          43.45083333
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Ironsides",
        "Year": "1873",
        "Type": "Freighter",
        "Type_of_Loss": "Unknown",
        "Lake": "Lake Michigan"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -86.31916667,
          43.04883333
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Anna C. Minch/Bow",
        "Year": "1940",
        "Type": "Freighter",
        "Type_of_Loss": "Storm",
        "Lake": "Lake Michigan"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -86.46283333,
          43.763
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Anna C. Minch/Stern",
        "Year": "1940",
        "Type": "Freighter",
        "Type_of_Loss": "Storm",
        "Lake": "Lake Michigan"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -86.464,
          43.76166667
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "State of Michigan",
        "Year": "1901",
        "Type": "Steamer",
        "Type_of_Loss": "Unknown",
        "Lake": "Lake Michigan"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -86.46416667,
          43.4555
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Salvor",
        "Year": "1930",
        "Type": "Steamer",
        "Type_of_Loss": "Storm",
        "Lake": "Lake Michigan"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -86.3685,
          43.26016667
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Drake",
        "Year": "1901",
        "Type": "Steamer",
        "Type_of_Loss": "Collision",
        "Lake": "Lake Superior"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -85.09888333,
          46.77646667
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Indiana",
        "Year": "1858",
        "Type": "Steamer",
        "Type_of_Loss": "Unknown",
        "Lake": "Lake Superior"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -85.2864,
          46.80956667
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Miztec",
        "Year": "1921",
        "Type": "Schooner",
        "Type_of_Loss": "Storm",
        "Lake": "Lake Superior"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -85.07503333,
          46.80141667
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Niagara",
        "Year": "1887",
        "Type": "Schooner",
        "Type_of_Loss": "Storm",
        "Lake": "Lake Superior"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -85.12553333,
          46.81948333
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Panther",
        "Year": "1916",
        "Type": "Steamer",
        "Type_of_Loss": "Collision",
        "Lake": "Lake Superior"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -84.80596667,
          46.63818333
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "SS Edmund Fitzgerald",
        "Year": "1975",
        "Type": "Freighter",
        "Type_of_Loss": "Storm",
        "Lake": "Lake Superior"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -85.1099956,
          46.99849601
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "17 Fathom Wreck",
        "Year": "Unknown",
        "Type": "Schooner",
        "Type_of_Loss": "Fire",
        "Lake": "Lake Erie"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.05,
          42.65
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Admiral",
        "Year": "1942",
        "Type": "Barge",
        "Type_of_Loss": "Storm",
        "Lake": "Lake Erie"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.9,
          41.633333
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "PS Atlantic",
        "Year": "1852",
        "Type": "Steamer",
        "Type_of_Loss": "Collision",
        "Lake": "Lake Erie"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.084764,
          42.510333
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Argo",
        "Year": "1937",
        "Type": "Barge",
        "Type_of_Loss": "Storm",
        "Lake": "Lake Erie"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.493056,
          41.669949
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Alva B",
        "Year": "1917",
        "Type": "Tug",
        "Type_of_Loss": "Storm ",
        "Lake": "Lake Erie"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.016667,
          -82.016667
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "A. R. Colborn and Crane",
        "Year": "1922",
        "Type": "Steamer",
        "Type_of_Loss": "Intentional",
        "Lake": "Lake Huron"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.422769,
          42.985519
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "A.E. Vickery",
        "Year": "1889",
        "Type": "Schooner",
        "Type_of_Loss": "Collision",
        "Lake": "Lake Ontario"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.019717,
          44.280333
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Alexandria",
        "Year": "1915",
        "Type": "Steamer",
        "Type_of_Loss": "Storm",
        "Lake": "Lake Ontario"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -79.2113,
          43.729017
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Juno",
        "Year": "1914",
        "Type": "Propeller",
        "Type_of_Loss": "Intentional",
        "Lake": "Lake Ontario"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -78.674036,
          43.884994
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Sligo",
        "Year": "1918",
        "Type": "Schooner",
        "Type_of_Loss": "Unknown",
        "Lake": "Lake Ontario"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -79.451469,
          43.615003
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Atlasco",
        "Year": "1921",
        "Type": "Steamer",
        "Type_of_Loss": "Unknown",
        "Lake": "Lake Ontario"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.994167,
          43.893883
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Olive Branch",
        "Year": "1880",
        "Type": "Schooner",
        "Type_of_Loss": "Storm",
        "Lake": "Lake Ontario"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.737167,
          43.9305
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Annie Falconer",
        "Year": "1904",
        "Type": "Schooner",
        "Type_of_Loss": "Storm",
        "Lake": "Lake Ontario"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.801667,
          43.964328
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Manola",
        "Year": "1918",
        "Type": "Steamer",
        "Type_of_Loss": "Storm",
        "Lake": "Lake Huron"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.243819,
          44.867469
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Frontenac",
        "Year": "1929",
        "Type": "Tug",
        "Type_of_Loss": "Leak",
        "Lake": "Lake Ontario"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.602014,
          44.018711
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "City of Sheboygan",
        "Year": "1915",
        "Type": "Schooner",
        "Type_of_Loss": "Storm",
        "Lake": "Lake Ontario"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.734467,
          44.075967
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "George T. Davie",
        "Year": "1945",
        "Type": "Barge",
        "Type_of_Loss": "Storm",
        "Lake": "Lake Ontario"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.580067,
          44.113583
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "George A. Marsh",
        "Year": "1917",
        "Type": "Schooner",
        "Type_of_Loss": "Storm",
        "Lake": "Lake Ontario"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.602797,
          44.126836
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Comet",
        "Year": "1861",
        "Type": "Steamer",
        "Type_of_Loss": "Unknown",
        "Lake": "Lake Ontario"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.584519,
          44.1388
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Cornwall",
        "Year": "1928",
        "Type": "Sidewheeler",
        "Type_of_Loss": "Intentional",
        "Lake": "Lake Ontario"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.619067,
          44.137783
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "William Jamieson",
        "Year": "1923",
        "Type": "Schooner",
        "Type_of_Loss": "Storm",
        "Lake": "Lake Ontario"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.794967,
          44.14835
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Wolfe Islander II",
        "Year": "1985",
        "Type": "Ferry",
        "Type_of_Loss": "Unknown",
        "Lake": "Lake Ontario"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.417383,
          44.2259
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "M. I. Wilcox",
        "Year": "1906",
        "Type": "Schooner",
        "Type_of_Loss": "Storm",
        "Lake": "Lake Erie"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.940833,
          41.9805
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "George Worthington",
        "Year": "1887",
        "Type": "Schooner",
        "Type_of_Loss": "Collision",
        "Lake": "Lake Erie"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.855,
          41.945
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Tioga",
        "Year": "1877",
        "Type": "Steamer",
        "Type_of_Loss": "Fire",
        "Lake": "Lake Erie"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.308329,
          42.684018
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Northern Indiana ",
        "Year": "1856",
        "Type": "Steamer",
        "Type_of_Loss": "Fire",
        "Lake": "Lake Erie"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.509983,
          41.897983
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Jay Gould",
        "Year": "1918",
        "Type": "Steamer",
        "Type_of_Loss": "Unknown",
        "Lake": "Lake Erie"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.410133,
          41.858833
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Specular",
        "Year": "1900",
        "Type": "Steamer",
        "Type_of_Loss": "Collision",
        "Lake": "Lake Erie"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.536164,
          41.822883
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Tasmania",
        "Year": "1905",
        "Type": "Schooner",
        "Type_of_Loss": "Unknown",
        "Lake": "Lake Erie"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.4965,
          41.788333
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Willis",
        "Year": "1872",
        "Type": "Schooner",
        "Type_of_Loss": "Collision",
        "Lake": "Lake Erie"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.168608,
          41.941114
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Frank E. Vigor",
        "Year": "1944",
        "Type": "Freighter",
        "Type_of_Loss": "Collision",
        "Lake": "Lake Ontario"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -74.621667,
          45.034167
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Little Wissahickon",
        "Year": "1896",
        "Type": "Schooner",
        "Type_of_Loss": "Unknown",
        "Lake": "Lake Erie"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.94635,
          41.903622
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Colonial",
        "Year": "1914",
        "Type": "Steamer",
        "Type_of_Loss": "Collision",
        "Lake": "Lake Erie"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -82.071483,
          42.251033
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Lycoming",
        "Year": "1910",
        "Type": "Steamer",
        "Type_of_Loss": "Fire",
        "Lake": "Lake Erie"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.889833,
          42.251283
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Merida",
        "Year": "1916",
        "Type": "Freighter",
        "Type_of_Loss": "Storm",
        "Lake": "Lake Erie"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.346475,
          42.232578
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Nimrod",
        "Year": "1874",
        "Type": "Schooner",
        "Type_of_Loss": "Collision",
        "Lake": "Lake Erie"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.005,
          42.376667
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Tradewind",
        "Year": "1854",
        "Type": "Schooner",
        "Type_of_Loss": "Collision",
        "Lake": "Lake Erie"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.200933,
          42.425267
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Henry Clay",
        "Year": "1851",
        "Type": "Steamer",
        "Type_of_Loss": "Unknown",
        "Lake": "Lake Erie"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.04535,
          42.55125
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Pascal P. Pratt",
        "Year": "1908",
        "Type": "Freighter",
        "Type_of_Loss": "Fire",
        "Lake": "Lake Erie"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.090478,
          42.561372
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Brown Brothers",
        "Year": "1959",
        "Type": "Tug",
        "Type_of_Loss": "Storm",
        "Lake": "Lake Erie"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.0152,
          42.62745
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Cecil J.",
        "Year": "1943",
        "Type": "Steamer",
        "Type_of_Loss": "Intentional",
        "Lake": "Lake Erie"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -80.228128,
          42.763081
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Raleigh",
        "Year": "1911",
        "Type": "Freighter",
        "Type_of_Loss": "Storm",
        "Lake": "Lake Erie"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -79.154233,
          42.865433
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "C. B. Benson",
        "Year": "1893",
        "Type": "Unknown",
        "Type_of_Loss": "Storm",
        "Lake": "Lake Erie"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -79.243483,
          42.771033
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "J. G. McGrath",
        "Year": "1878",
        "Type": "Schooner",
        "Type_of_Loss": "Unknown",
        "Lake": "Lake Erie"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -79.396333,
          42.667933
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Carlingford",
        "Year": "1881",
        "Type": "Schooner",
        "Type_of_Loss": "Collision",
        "Lake": "Lake Erie"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -79.476617,
          42.6548
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Niagara",
        "Year": "1899",
        "Type": "Propeller",
        "Type_of_Loss": "Unknown",
        "Lake": "Lake Erie"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -79.60475,
          42.7385
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Marquette",
        "Year": "1903",
        "Type": "Freighter",
        "Type_of_Loss": "Leak",
        "Lake": "Lake Superior"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.42973333,
          46.83186667
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Moonlight",
        "Year": "1903",
        "Type": "Schooner",
        "Type_of_Loss": "Leak",
        "Lake": "Lake Superior"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.37838333,
          46.83231667
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Sevona",
        "Year": "1905",
        "Type": "Steamer",
        "Type_of_Loss": "Storm",
        "Lake": "Lake Superior"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.9028,
          47.00783333
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Ottowa",
        "Year": "1909",
        "Type": "Tug",
        "Type_of_Loss": "Fire",
        "Lake": "Lake Superior"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.76365,
          46.8832
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Lucerne",
        "Year": "1886",
        "Type": "Schooner",
        "Type_of_Loss": "Storm",
        "Lake": "Lake Superior"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.76725,
          46.72315
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Fedora",
        "Year": "1901",
        "Type": "Steamer",
        "Type_of_Loss": "Fire",
        "Lake": "Lake Superior"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.7787,
          46.86003333
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Noquebay",
        "Year": "1905",
        "Type": "Schooner",
        "Type_of_Loss": "Fire",
        "Lake": "Lake Superior"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.52853333,
          46.92583333
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "J.S. Seaverns",
        "Year": "1884",
        "Type": "Propeller",
        "Type_of_Loss": "Collision",
        "Lake": "Lake Superior"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -84.89986,
          47.95009
        ]
      }
    },  
    {
      "type": "Feature",
      "properties": {
        "Name": "Pretoria",
        "Year": "1905",
        "Type": "Schooner",
        "Type_of_Loss": "Storm",
        "Lake": "Lake Superior"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.38843333,
          47.08886667
        ]
      }
    }
  ]
}

];


//setup custom icon
var wreckIcon = L.icon({
	    iconUrl: 'img/shipwreck.png',
	    iconSize:     [32, 37],
	    iconAnchor:   [12, 29],
	    popupAnchor:  [3, -32]
	});


//add popups to the markers when clicked
wreckLayer.on('layeradd', function(e) {
	    var marker = e.layer,
	    feature = marker.feature;
	
	    var popupContent = "<b>" + feature.properties.Name + "</b>" + "<br>" + "Ship Type: " + feature.properties.Type + "<br>" + "Loss Type: " + feature.properties.Type_of_Loss + " (" + feature.properties.Year + ")"   
        ;
	
	    marker.bindPopup(popupContent,{
            
        })
    
    .setIcon(wreckIcon);
	});


//send the markers to the map layer
var markers = wreckLayer.setGeoJSON(shipwrecks);


//filter the markers by category
$('#category_type_filter, #category_loss_filter, #category_lake_filter, #category_year_filter').change(function() {
    var catType = $('#category_type_filter').val();
    var catLoss = $('#category_loss_filter').val();
    var catLake = $('#category_lake_filter').val();
    var catYear = $('#category_year_filter').val();
    markers.setFilter(function(f) {        
        return (catType === 'Any' || f.properties.Type === catType) &&
            (catLoss === 'Any' || f.properties.Type_of_Loss === catLoss) &&
            (catLake === 'Any' || f.properties.Lake === catLake) &&
            (catYear === 'Any' || f.properties.Year === catYear);        
    });
    return false;
    
});

//search feature to search the shipwrecks by name
var searchControl = new L.Control.Search({container: 'search', layer: wreckLayer, propertyName: 'Name', circleLocation:false, marker:false, collapsed:false, textPlaceholder: 'Wreck Name...', zoom: 13});

    searchControl.on('search:locationfound', function(event) {
    //if a match is found open the popup for that marker   
    event.layer.openPopup();

  
    });

    map.addControl( searchControl );  //inizialize search control

//reset all filters
function clearFilters() {
   $('#category_type_filter').val('Any');
   $('#category_loss_filter').val('Any');
   $('#category_lake_filter').val('Any');
   $('#category_year_filter').val('Any');    
    var catType = $('#category_type_filter').val();
    var catLoss = $('#category_loss_filter').val();
    var catLake = $('#category_lake_filter').val();
    var catYear = $('#category_year_filter').val();
     markers.setFilter(function(f) {
        return (catType === 'Any' || f.properties.Type === catType) &&
            (catLoss === 'Any' || f.properties.Type_of_Loss === catLoss) &&
            (catLake === 'Any' || f.properties.Lake === catLake) &&
            (catYear === 'Any' || f.properties.Year == catYear);
        
    });
    return false;
}

//center the map
L.easyButton('fa-crosshairs fa-lg', function(btn,map){
     map.setView([45.2858536, -83.8419731], 6);
}).addTo(map);
