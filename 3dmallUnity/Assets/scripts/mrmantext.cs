using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class mrmantext : MonoBehaviour {
	
	public int fontSize = 20;

	public bool showName = false;
	void PlayerHit(ControllerColliderHit hit)
	{
		showName = true;
	}
	private float curTime = 0;
	private float triggerTime = 5;
	void OnGUI()
	{  
		GUI.skin.label.fontSize = GUI.skin.box.fontSize = GUI.skin.button.fontSize = fontSize;
		if(showName == true)
		{
			GUI.Label(new Rect(400,500,200,200), "why am I here");
			if (curTime < triggerTime) {
				curTime += Time.deltaTime;
			} else {
				showName = false;
				curTime = 0;
			}
		}
	}
}