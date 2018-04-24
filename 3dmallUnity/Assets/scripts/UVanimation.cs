using System.Collections;
using UnityEngine;

public class UVanimation : MonoBehaviour {

	public int uvTileY = 2;
	public int uvTileX = 1; 
	public int fps = 10;
	private int index;
	private Vector2 size;
	private Vector2 offset;
	private Renderer renderer;

	void Start()
	{
		renderer = GetComponent<Renderer> ();
	}

	void Update () {
		transform.LookAt(Camera.main.transform.position);

		index = (int)(Time.time * fps);

		index = index % (uvTileY * uvTileX);

		Vector2 size = new Vector2(1.0f / uvTileY, 1.0f / uvTileX);

		var uIndex = index % uvTileX;
		var vIndex = index / uvTileX;

		Vector2 offset = new Vector2(uIndex * size.x, 1.0f - size.y - vIndex * size.y);

		GetComponent<Renderer>().material.SetTextureOffset ("_MainTex", offset);
		GetComponent<Renderer>().material.SetTextureScale ("_MainTex", size);
	}
}
