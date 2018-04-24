using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class news : MonoBehaviour {

		void PlayerHit(ControllerColliderHit hit){
			Application.OpenURL("news.htm");
		}
	}