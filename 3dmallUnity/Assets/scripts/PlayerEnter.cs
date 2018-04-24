using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerEnter : MonoBehaviour {

	void OnControllerColliderHit(ControllerColliderHit hit){
		if (hit.normal.y < 0.9){ // filter out ground collisions
			// try to call PlayerHit in the other object
			hit.gameObject.SendMessage("PlayerHit", hit, SendMessageOptions.DontRequireReceiver);
		}
	}
}
