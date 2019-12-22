# Udacity_MLND_Capstone
Udacity Machine Learning Nanodegree Capstone project

README
This document addresses the requirements in order to run the Jupyter notebook – Capstone.ipynb.
Folder Structure:
├── CapStone.ipynb
├── license_random_.js
├── README.md
└── plates
    ├── train
    │   ├── AAA 111,jpg
    │   ├── …
    │   └── ZCB 979.jpg
    ├── test
│   ├── AAO 810.jpg
│   ├── …
    │   └── ZZU 626.jpg
├── validation
│   ├── AAE 003.jpg
│   ├── …
    │   └── ZZZ 864.jpg
Platform:
•	For Windows users:  Windows 10 is required as this project was successfully run on and tested.
•	For Linux/MacOS: file paths used in the Capstone.ipynb such as ‘./plates’, ‘./plates/train’ and ‘./plates/validation’ are required to update to ‘/plates’, ‘/plates/train’ and ‘/plates/validation’ respectively. 
Libraries:
•	Numpy
•	Pandas
•	Os
•	Cv2
•	Itertools
•	Collections
•	Keras
•	Tensorflow

Dataset:
	The dataset used in this project is divided into three folders
plates/
•	train  (15245 files)
•	validation (8 files)
•	test (1981 files)
Run time:
This project was tested on a Windows 10 machine with CPU at 3.6Ghz and 8GB RAM. No GPU on board. It took about seven(7) hours to run one epoch. If GPU is available on your machine, you may need to modify the code in order to take advantage of your powerful computation unit.
