using UnityEngine;
using System.Collections;

public class npc : MonoBehaviour
{

	void Update() 
	{
		transform.LookAt(Camera.main.transform.position);

	}

}