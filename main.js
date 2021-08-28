function setup() 
{
  canvas = createCanvas(310, 270);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();

  classifier = ml5.imageClassifier('MobileNet',modelLoaded);
}

function modelLoaded()
{
  console.log("Model Loaded!!");
}

function draw()
{
  image(video, 0,0, 310,270);
  classifier.classify(video, got_result);
}

function got_result(error, results)
{
  if (error)
  {
  console.error(error);
  }
else
{
console.log(results);
document.getElementById("result_object_name").innerHTML = results[0].label;
document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(2);
}

}