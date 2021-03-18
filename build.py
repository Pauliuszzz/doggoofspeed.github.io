import os
import shutil
import os.path


# Insert export location (Default: [home]/Downloads/Project_Passage)
exportPath = os.path.expanduser("~") + "/Downloads/Project_Passage"

if (os.path.isdir(exportPath)):
    shutil.rmtree(exportPath)
os.mkdir(exportPath)
shutil.copytree('Survival', exportPath + '/Survival')
shutil.copytree('Story', exportPath + '/Story')
shutil.copytree('resources', exportPath + '/resources')
shutil.copytree('js', exportPath + '/js')
shutil.copytree('css', exportPath + '/css')
shutil.copytree('Arcade', exportPath + '/Arcade')
shutil.copy2('index.html', exportPath)